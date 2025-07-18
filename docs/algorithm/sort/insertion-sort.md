---
comments: true
tags:
    - 算法
    - 排序
---

# 插入排序

/// success | 一句话解释

逐个取出未排序元素，在已排序序列中找到正确位置插入，直至完全有序。

///

## 一、算法图解

### 1.1 Manim 动画演示

![insertion-sort](./images/insertion-sort.webp)

/// details | Manim 动画演示源代码

```python
```

///

### 1.2 Mermaid 流程图示意

```mermaid
```

## 二、算法特性

### 2.1 时间复杂度

时间复杂度为 $O(n^2)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$，不消耗额外的空间，即原地排序。

### 2.3 其它性质

稳定的，不会改变相邻且大小相同值之间的相对位置。

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。在每种编程语言下方均提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def insertion_sort(arr: list[int]) -> None:
    for i in range(len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            else:
                break
```

{% set src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
void insertionSort(std::vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                std::swap(arr[j], arr[j - 1]);
            } else {
                break;
            }
        }
    }
}
```

{% set src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
public static void insertionSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);//(1)!
            } else {
                break;
            }
        }
    }
}
```

1. 方法 `swap` 的定义如下：
```java
public static void swap(int[] arr, int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

{% set src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
}
```

{% set src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe width="800" height="500" frameborder="0" src="{{ src_javascript }}"></iframe>

///

/// tab | 🟤 C

```c
void insertionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);//(1)!
            } else {
                break;
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

    <iframe width="800" height="500" frameborder="0" src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
static void InsertionSort(int[] arr) {
    for (int i = 0; i < arr.Length; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                (arr[j], arr[j - 1]) = (arr[j - 1], arr[j]);
            } else {
                break;
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target="_blank"} 暂时还不支持 C# 的可视化！"

///

/// tab | 🟣 Go

```go
func InsertionSort(arr []int) {
    for i := 0; i < len(arr); i++ {
        for j := i; j > 0; j-- {
            if arr[j] < arr[j - 1] {
                arr[j], arr[j - 1] = arr[j - 1], arr[j];
            } else {
                break;
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target="_blank"} 暂时还不支持 Go 的可视化！"

///

### 3.2 改进代码

选择排序还可以通过二分的方式进行改进，下面是改进后的代码：

/// tab | 🔵 Python

```python
def insertion_sort(arr: list[int]) -> None:
    for i in range(len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            else:
                break
```

///

/// tab | 🔴 C++

```cpp
void insertionSort(std::vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                std::swap(arr[j], arr[j - 1]);
            } else {
                break;
            }
        }
    }
}
```

///

/// tab | 🟠 Java

```java
public static void insertionSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);//(1)!
            } else {
                break;
            }
        }
    }
}
```

1. 方法 `swap` 的定义如下：
```java
public static void swap(int[] arr, int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

///

/// tab | 🟡 JavaScript

```javascript
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
}
```

///

/// tab | 🟤 C

```c
void insertionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);//(1)!
            } else {
                break;
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

///

/// tab | 🟢 C#

```csharp
static void InsertionSort(int[] arr) {
    for (int i = 0; i < arr.Length; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                (arr[j], arr[j - 1]) = (arr[j - 1], arr[j]);
            } else {
                break;
            }
        }
    }
}
```

///

/// tab | 🟣 Go

```go
func InsertionSort(arr []int) {
    for i := 0; i < len(arr); i++ {
        for j := i; j > 0; j-- {
            if arr[j] < arr[j - 1] {
                arr[j], arr[j - 1] = arr[j - 1], arr[j];
            } else {
                break;
            }
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

def insertion_sort(arr: list[int]) -> None:
    pass  # 请将代码写在这里

if __name__ == "__main__":
    arr: list[int] = [4, 6, 3, 2, 7, 1, 5]
    insertion_sort(arr)
    print(*arr)
</pre>

///

[^1]: [11.4   插入排序 - Hello 算法](https://www.hello-algo.com/chapter_sorting/insertion_sort/){target="_blank"}
[^2]: [插入排序 - OI Wiki](https://oiwiki.org/basic/insertion-sort/){target="_blank"}
[^3]: [算法讲解004【入门】选择、冒泡、插入排序_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12P41147to/){target="_blank"}
