---
comments: true
tags:
    - 算法
    - 排序
---

# 冒泡排序

/// success | 一句话解释

通过不断比较交换相邻元素使最大值逐渐上浮至末尾，并缩小待排序范围，直至完全有序。​

///

## 一、算法图解

### 1.1 Manim 动画演示

![bubble-sort](./bubble-sort.webp)

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

时间复杂度为 $O(n^2)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

稳定的，不会改变相邻且大小相同值之间的相对位置。

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def bubble_sort(arr: list[int]) -> None:
    for i in range(len(arr), 0, -1):
        for j in range(i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
```

{% set src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
void bubbleSort(std::vector<int> &arr) {
    for (int i = arr.size(); i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}
```

{% set src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
void bubbleSort(ArrayList<Integer> arr) {
    for (int i = arr.size(); i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr.get(j) > arr.get(j + 1)) {
                Collections.swap(arr, j, j + 1);
            }
        }
    }
}
```

{% set src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
```

{% set src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
void bubbleSort(int arr[], int n) {
    for (int i = n; n > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);//(1)!
            }
        }
    }
}
```

1. 函数 `swap` 的定义如下：
```c
void swap(int arr[], int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

{% set src_c = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
void BubbleSort(List<int> arr) {
    for (int i = arr.Count; i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func bubbleSort(arr []int) {
    for i := len(arr); i > 0; i-- {
        for j := 0; j < i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn bubble_sort(arr: &mut Vec<i32>) {
    for i in (1..=arr.len()).rev() {
        for j in 0..i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Rust 的可视化！"

///

### 3.2 改进代码

冒泡排序还可以通过添加变量 `swapped` 标志当前循环是否存在交换，若没有任何交换，则可以提前退出循环（当前长度的循环都没有交换，那么其更短长度的子循环也不会存在交换），下面是改进后的代码：

/// tab | 🔵 Python

```python
def bubble_sort_with_flag(arr: list[int]) -> None:
    for i in range(len(arr), 0, -1):
        swapped = False
        for j in range(i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
```

///

/// tab | 🔴 C++

```cpp
void bubbleSortWithFlag(std::vector<int> &arr) {
    for (int i = arr.size(); i > 0; i--) {
        bool swapped = false;
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

///

/// tab | 🟠 Java

```java
void bubbleSortWithFlag(ArrayList<Integer> arr) {
    for (int i = arr.size(); i > 0; i--) {
        boolean swapped = false;
        for (int j = 0; j < i - 1; j++) {
            if (arr.get(j) > arr.get(j + 1)) {
                Collections.swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

///

/// tab | 🟡 JavaScript

```javascript
function bubbleSortWithFlag(arr) {
    for (let i = arr.length; i > 0; i--) {
        let swapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

///

/// tab | 🟣 C

```c
void bubbleSortWithFlag(int arr[], int n) {
    for (int i = n; n > 0; i--) {
        bool swapped = false;
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);//(1)!
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

1. 函数 `swap` 的定义如下：
```c
void swap(int arr[], int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

///

/// tab | 🟢 C#

```csharp
void BubbleSortWithFlag(List<int> arr) {
    for (int i = arr.Count; i > 0; i--) {
        bool swapped = false;
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

///

/// tab | 🔵 Go

```go
func bubbleSortWithFlag(arr []int) {
    for i := len(arr); i > 0; i-- {
        swapped := false
        for j := 0; j < i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        if !swapped {
            break
        }
    }
}
```

///

/// tab | 🟤 Rust

```rust
fn bubble_sort_with_flag(arr: &mut Vec<i32>) {
    for i in (1..=arr.len()).rev() {
        let mut swapped = false;
        for j in 0..i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }
}
```

///

### 3.3 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def bubble_sort(arr: list[int]) -> None:
    pass

if __name__ == "__main__":
    arr: list[int] = [7, 0, 6, 1, 5, 2, 4, 3]
    bubble_sort(arr)
    print(arr)
</pre>

///

[^1]: [11.3   冒泡排序 - Hello 算法](https://www.hello-algo.com/chapter_sorting/bubble_sort/){target=_blank}
[^2]: [冒泡排序 - OI Wiki](https://oiwiki.org/basic/bubble-sort/){target=_blank}
[^3]: [算法讲解004【入门】选择、冒泡、插入排序_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12P41147to/){target=_blank}
