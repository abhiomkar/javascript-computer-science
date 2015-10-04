import Tree from './Tree';
import SampleData from './data';

var tree = new Tree(SampleData.tree1);
tree.depthFirstSearch();
console.log('tree: ', tree.tree);
