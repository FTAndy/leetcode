# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} p
# @param {TreeNode} q
# @return {Boolean}
def is_same_tree(p, q)
    if (q.nil? && p.nil?)
        return true
    elsif (q.nil? || p.nil?) || (q.val != p.val)
        return false
    elsif q.val == p.val
        return is_same_tree(q.left, p.left) && is_same_tree(q.right, p.right)
    end
end
