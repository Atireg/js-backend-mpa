import { Router } from 'express'
import volcanoService from '../services/volcanoService.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const volcanoController = Router();

volcanoController.get('/', async (req, res) => {
    const volcanoes = await volcanoService.getAll().lean();
    res.render('volcano', { volcanoes, title: 'Catalog' });
})

volcanoController.get('/create', isAuth, (req, res) => {
    const volcanoTypesData = getVolcanoTypeViewData({ });

    res.render('volcano/create', { volcanoTypes: volcanoTypesData, title: 'Create' });
});

volcanoController.post('/create', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const userId = req.user._id;

    try {
        await volcanoService.create(volcanoData, userId);
        res.redirect('/volcanoes');
        
    } catch (err) {
        const error = getErrorMessage(err);
        const volcanoTypesData = getVolcanoTypeViewData(volcanoData);

        res.render('volcano/create', { volcano: volcanoData, volcanoTypes: volcanoTypesData, error, title: 'Create' });
    };
    
});

volcanoController.get('/search', async (req, res) => {
    const query = req.query;
    const volcanoes = await volcanoService.getAll(query).lean();
    const volcanoTypes = getVolcanoTypeViewData(query);

    res.render('volcano/search', { title: 'Search', volcanoes, query, volcanoTypes })
});

volcanoController.get('/:volcanoId/details', async (req, res) => {
    const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
    const isOwner = volcano.owner.toString() === req.user?._id;

    // if (!volcano.voteList){
    //     volcano.voteList = []
    // }
    const hasVoted = volcano.voteList.some(userId => userId.toString() === req.user?._id) || false;
    const voteCount = volcano.voteList.length || 0;

    res.render('volcano/details', { volcano, title: `${volcano.name} Details`, isOwner, hasVoted, voteCount })
});

volcanoController.get('/:volcanoId/vote', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const userId = req.user._id;

    if(isVolcanoOwner(volcanoId, userId)){
        return res.redirect('/404');
    };

    try {
        await volcanoService.vote(volcanoId, userId); 
        res.redirect(`/volcanoes/${volcanoId}/details`);
    } catch (err) {
        //TODO add the error notification
        console.log(err);  
    }
});

volcanoController.get('/:volcanoId/delete', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const userId = req.user._id;

    if(!isVolcanoOwner(volcanoId, userId)){
        return res.redirect('/404');
    };

    try {
        await volcanoService.remove(volcanoId);
        res.redirect('/volcanoes')
    } catch (err) {
        //TODO add the error notification
        console.log(err);  
    }
});

volcanoController.get('/:volcanoId/edit', isAuth, async (req, res) => {
    const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
    const volcanoTypesData = getVolcanoTypeViewData(volcano);
    const isOwner = volcano.owner.toString() === req.user._id;

    if(!isOwner){
        return res.redirect('/404');
    };

    res.render('volcano/edit', { volcano, volcanoTypes: volcanoTypesData, title: 'Edit Page' });
});

volcanoController.post('/:volcanoId/edit', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const volcanoId = req.params.volcanoId;
    
    if(!isVolcanoOwner(volcanoId, req.user._id)){
        return res.redirect('/404');
    };
    
    try {
        await volcanoService.edit(volcanoId, volcanoData);
        res.redirect(`/volcanoes/${volcanoId}/details`);
    } catch (err) {
        const volcanoTypesData = getVolcanoTypeViewData(volcanoData);
        const error = getErrorMessage(err);
        res.render('volcano/edit', { volcano: volcanoData, volcanoTypes: volcanoTypesData, title: 'Edit Page', error });
    }
});

function getVolcanoTypeViewData({typeVolcano}){
    const volcanoTypes = [
        'Supervolcanoes',
        'Submarine',
        'Subglacial',
        'Mud',
        'Stratovolcanoes',
        'Shield'
    ];

    const viewData = volcanoTypes.map(type => ({
        value: type,
        label: type,
        selected: typeVolcano === type ? 'selected' : ''
    }));

    return viewData;
};

async function isVolcanoOwner(volcanoId, userId){
    const volcano = await volcanoService.getOne(volcanoId).lean();
    const isOwner = volcano.owner.toString() === userId;

    return isOwner;
}

export default volcanoController;