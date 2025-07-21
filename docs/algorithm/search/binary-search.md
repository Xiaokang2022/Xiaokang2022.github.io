---
comments: true
tags:
    - 算法
    - 搜索
---

# 二分搜索

/// success | 一句话解释

每次比较中间元素，若未命中则排除一半无效区间，逐步缩小搜索范围。

///

## 一、算法图解

### 1.1 Manim 动画演示

![binary-search](./images/binary-search.webp)

/// details | Manim 动画演示源代码

```python
```

///

### 1.2 Mermaid 流程图示意

```mermaid
graph TD
```

## 二、算法性质

### 2.1 时间复杂度

时间复杂度为 $O(\log_{2} n)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def binary_search(arr: list[int], target: int) -> bool:
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid] < target:
            left = mid + 1
        elif arr[mid] > target:
            right = mid - 1
        else:
            return True
    return False
```

{% set src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
bool binarySearch(const std::vector<int> &arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

{% set src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
public static boolean binarySearch(ArrayList<Integer> arr, Integer target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid) < target) {
            left = mid + 1;
        } else if (arr.get(mid) > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

{% set src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

{% set src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
bool binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

{% set src_c = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
static bool BinarySearch(List<int> arr, int target) {
    int left = 0, right = arr.Count - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target="_blank"} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func BinarySearch(arr []int, target int) bool {
    left, right := 0, len(arr) - 1
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid] < target {
            left = mid + 1
        } else if arr[mid] > target {
            right = mid - 1
        } else {
            return true
        }
    }
    return false
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target="_blank"} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn binary_search(arr: &Vec<i32>, target: i32) -> bool {
    let (mut left, mut right) = (0, arr.len() as i32 - 1);
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize] < target {
            left = mid + 1;
        } else if arr[mid as usize] > target {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target="_blank"} 暂时还不支持 Rust 的可视化！"

///

### 3.2 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def binary_search(arr: list[int], target: int) -> int:
    pass  # 请将代码写在这里

if __name__ == "__main__":
    arr: list[int] = [0, 1, 2, 3, 4, 5, 6, 7]
    print(binary_search(arr, 4))
</pre>

///

## 四、算法扩展

### 4.1 搜索上下界

/// tab | 🔵 Python

```python
```

///

/// tab | 🔴 C++

```cpp
```

///

/// tab | 🟠 Java

```java
```

///

/// tab | 🟡 JavaScript

```javascript
```

///

/// tab | 🟣 C

```c
```

///

/// tab | 🟢 C#

```csharp
```

///

/// tab | 🔵 Go

```go
```

///

/// tab | 🟤 Rust

```rust
```

///

### 4.2 搜索峰谷值

/// tab | 🔵 Python

```python
```

///

/// tab | 🔴 C++

```cpp
```

///

/// tab | 🟠 Java

```java
```

///

/// tab | 🟡 JavaScript

```javascript
```

///

/// tab | 🟣 C

```c
```

///

/// tab | 🟢 C#

```csharp
```

///

/// tab | 🔵 Go

```go
```

///

/// tab | 🟤 Rust

```rust
```

///

[^1]: [10.1   二分查找 - Hello 算法](https://www.hello-algo.com/chapter_searching/binary_search/){target="_blank"}
[^2]: [二分 - OI Wiki](https://oiwiki.org/basic/binary/){target="_blank"}
[^3]: [算法讲解006【入门】二分搜索_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1bX4y177uT//){target="_blank"}
