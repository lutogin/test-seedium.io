import RouteCreator from '../../lib/routes/Router';
import PostsController from './posts-controller';

const router = new RouteCreator(PostsController);

router.post('/', PostsController.create); // create
router.delete('/:id', (req, res) => {
  res.send(`Delete ${req.data.id}`);
}); // delete

export default router;
