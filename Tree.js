class Tree {
	constructor(tree) {
		this.tree = tree;
	}

	depthFirstSearch(root = this.tree, callback = this.visit) {
		var that = this;
		if (root === undefined) return false;

		callback(root);
		root.visited = true;

		root.children && Object.keys(root.children).forEach((key) => {
			if (root.children[key].visited === undefined) {
				that.depthFirstSearch(root.children[key]);
			}
		});
	}

	visit(node) {
		console.log(node.name);
	}
}

export default Tree;
