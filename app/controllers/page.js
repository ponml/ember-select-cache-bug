import Controller from '@ember/controller';


export default class PageController extends Controller {
  categories = [{id: 1, name: "cat"}, {id: 2, name: "dog"}, {id: 3, name: "really big crocodile"}]
  categories2 = [{id: 11, name: "nope"}, {id: 22, name: "yes"}, {id: 33, name: "really big crocodile"}]
}