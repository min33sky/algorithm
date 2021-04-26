# 동일 합으로 배열 분할 문제

# 방법 1) 전체 탐색

def canPartition(nums) -> bool:
    if sum(nums) % 2 != 0:
        return False

    def canPartitionRec(nums, sum, index):
        if sum == 0:
            return True

        if index >= len(nums):
            return False

        if sum - nums[index] >= 0:
            if canPartitionRec(nums, sum - nums[index], index + 1):
                return True

        return canPartitionRec(nums, sum, index + 1)

    return canPartitionRec(nums, int(sum(nums) / 2), 0)


print(canPartition([1, 2, 3, 4]))
print(canPartition([1, 2, 3, 5]))
print(canPartition([1, 2, 5]))

# 방법 2) 메모이제이션 (topdown)


def canPartition_tp(nums):
    s = sum(nums)
    if s % 2 != 0:
        return False

    def canParititionRec(dp, nums, sum, index):
        if sum == 0:
            return 1

        if index >= len(nums):
            return 0

        if dp[index][sum] == -1 and nums[index] <= sum:
            if canParititionRec(dp, nums, sum - nums[index], index + 1) == 1:
                return 1

        dp[index][sum] = canParititionRec(dp, nums, sum, index + 1)

        return dp[index][sum]

    dp = [[-1 for x in range(int(s / 2) + 1)] for y in range(len(nums))]

    return True if canParititionRec(dp, nums, int(s / 2), 0) == 1 else False


print(canPartition_tp([1, 2, 3, 4]))
print(canPartition_tp([1, 2, 3, 5]))
print(canPartition_tp([1, 2, 5]))


# 방법3) bottom up

def canPartition_bu(nums):
    total = sum(nums)
    n = len(nums)

    # 전체 합이 홀수일 경우에는 불가능함
    if total % 2 != 0:
        return False

    # 배열을 2분할 하기때문에 합의 반까지만 체크하면 된다.
    half = int(total / 2)

    # 체크한 값을 기록할 배열
    dp = [[False for x in range(half + 1)] for y in range(n)]

    # 인덱스와 간계없이 합이 0일 경우는 모두 True (선택을 안하면 되니까)
    for i in range(n):
        dp[i][0] = True

    # 인덱스가 0일 때의 결과를 저장
    for s in range(half + 1):
        if nums[0] == s:
            dp[0][s] = True

    # 합이 1 ~ 절반까지의 경우를 구한다.
    for i in range(1, n):
        for s in range(1, half + 1):
            # 이전 인덱스의 합이 참이면 다음 인덱스의 합도 참
            if dp[i-1][s]:
                dp[i][s] = dp[i-1][s]
            # 특정합에서 특정 숫자를 빼고 조합을 만들 수 있는지 확인
            elif s >= nums[i]:
                dp[i][s] = dp[i-1][s-nums[i]]

    return dp[n-1][half]


print(canPartition_bu([1, 2, 3, 4]))
print(canPartition_bu([1, 2, 3, 5]))
print(canPartition_bu([1, 2, 5]))
