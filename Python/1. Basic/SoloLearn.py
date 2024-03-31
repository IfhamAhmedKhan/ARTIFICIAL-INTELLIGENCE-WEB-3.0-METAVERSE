sports = ["football", "Basketball", "Tennis"]

group = [x for x in sports if "ball" in x]

print(group)

scores = [43,75,88,443,857,97]

high_scores = [scores for scores in scores if scores > 80]

print(high_scores)

#------------------------------------

words = ["tree", "button", "cat", "window", "defenestrate"]

longer_list = [x for x in words if len(x) > 4]

print(longer_list)