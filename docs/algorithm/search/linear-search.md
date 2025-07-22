---
comments: true
tags:
    - 算法
    - 搜索
---

# 线性搜索

/// success | 一句话解释

从头到尾逐个比较数据结构中的每个元素，直到找到目标值或遍历完所有元素​​。

///

## 一、算法图解

### 1.1 Manim 动画演示

![linear-search](./images/linear-search.webp)

/// details | Manim 动画演示源代码

```python { .limit linenums="0" }
```

///

### 1.2 Mermaid 流程图示意

```mermaid
graph TD
```

## 二、算法性质

### 2.1 时间复杂度

时间复杂度为 $O(n)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def linear_search(arr: list[int], target: int) -> int:
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

{% set src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
int linearSearch(const std::vector<int> &arr, int target) {
    for (const auto &[i, v] : arr | std::views::enumerate) {
        if (v == target) {
            return i;
        }
    }
    return -1;
}
```

{% set src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
int linearSearch(ArrayList<Integer> arr, Integer target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr.get(i).equals(target)) {
            return i;
        }
    }
    return -1;
}
```

{% set src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function linearSearch(arr, target) {
    for (const [i, v] of arr.entries()) {
        if (v === target) {
            return i;
        }
    }
    return -1;
}
```

{% set src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

{% set src_c = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
int LinearSearch(List<int> arr, int target) {
    for (int i = 0; i < arr.Count; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func linearSearch(arr []int, target int) int {
    for i, v := range arr {
        if v == target {
            return i
        }
    }
    return -1
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn linear_search(arr: &Vec<i32>, target: i32) -> i32 {
    for (i, &v) in arr.iter().enumerate() {
        if v == target {
            return i as i32;
        }
    }
    return -1;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Rust 的可视化！"

///

### 3.2 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def linear_search(arr: list[int], target: int) -> int:
    pass

if __name__ == "__main__":
    arr: list[int] = [7, 0, 6, 1, 5, 2, 4, 3]
    print(linear_search(arr, 5))
</pre>

///
