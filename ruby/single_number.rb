def single_number(nums)
    nums.each {|num| return num if nums.index(num) == nums.rindex(num) }
end
