import { Router } from 'express'
import volcanoService from '../services/volcanoService.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const volcanoController = Router();

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
}

volcanoController.get('/create', (req, res) => {
    res.render('volcano/create');
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

        res.render('volcano/create', { volcano: volcanoData, volcanoTypes: volcanoTypeData, error });
    };
    
})

export default volcanoController;