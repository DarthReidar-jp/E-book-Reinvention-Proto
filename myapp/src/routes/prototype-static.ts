import express, { Request, Response } from 'express';

const router = express.Router();

// BookDisplayの表示
router.get('/bookDisplay', async (req: Request, res: Response) => {
    res.render('proto-bookDisplay');
});
// BookReaderの表示
router.get('/reader', async (req: Request, res: Response) => {
            res.render('proto-reader');
    });
// Bookwriterの表示
router.get('/writer', async (req: Request, res: Response) => {
    res.render('proto-writer');
});
//執筆サポート機能
router.get('/writer-support', (req:Request,res:Response)=>{
    res.render('proto-writer-support');
});

export default router;
