var postorder = function(root) {
    let arr = []
    let post = (node) => {
        if (node) {
            for (let i = 0; i < node.children.length; i++) {
                post(node.children[i])
            }
            arr.push(node.val)
        }
    }
    post(root)
    return arr
};