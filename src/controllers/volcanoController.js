import { Router } from 'express'
import volcanoService from '../services/volcanoService.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const volcanoController = Router();

volcanoController.get('/', async (req, res) => {
    const volcanoes = await volcanoService.getAll().lean();
    res.render('volcano', { volcanoes, title: 'Catalog' });
})

volcanoController.get('/create', (req, res) => {
    const volcanoTypeData = getVolcanoTypeViewData({ });

    res.render('volcano/create', { volcanoTypes: volcanoTypeData, title: 'Create' });
});

volcanoController.post('/create', async (req, res) => {
    const volcanoData = req.body;
    const userId = req.user._id;

    try {
        await volcanoService.create(volcanoData, userId);
        res.redirect('/volcanoes');
        
    } catch (err) {
        const error = getErrorMessage(err);
        const volcanoTypeData = getVolcanoTypeViewData(volcanoData);

        res.render('volcano/create', { volcano: volcanoData, volcanoTypes: volcanoTypeData, error, title: 'Create' });
    };
    
});

volcanoController.get('/:volcanoId/details', async (req, res) => {
    const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
    res.render('volcano/details', { volcano, title: `${volcano.name} Details` })
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

export default volcanoController;