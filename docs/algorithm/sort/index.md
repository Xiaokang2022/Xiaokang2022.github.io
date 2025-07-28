---
comments: true
hide:
    - toc
---

# 排序

```markmap
- 排序
    - [选择排序](./selection-sort/)
        - [一、算法图解](./selection-sort/#一算法图解)
            - [1.1 Manim 动画演示](./selection-sort/#11-manim-动画演示)
            - [1.2 Mermaid 流程图示意](./selection-sort/#12-mermaid-流程图示意)
        - [二、算法性质](./selection-sort/#二算法性质)
            - [2.1 时间复杂度](./selection-sort/#21-时间复杂度)
            - [2.2 空间复杂度](./selection-sort/#22-空间复杂度)
            - [2.3 其它性质](./selection-sort/#23-其它性质)
        - [三、算法实现](./selection-sort/#三算法实现)
            - [3.1 多语言代码](./selection-sort/#31-多语言代码)
            - [3.2 自我测试](./selection-sort/#32-自我测试)
    - [冒泡排序](./bubble-sort/)
        - [一、算法图解](./bubble-sort/#一算法图解)
            - [1.1 Manim 动画演示](./bubble-sort/#11-manim-动画演示)
            - [1.2 Mermaid 流程图示意](./bubble-sort/#12-mermaid-流程图示意)
        - [二、算法性质](./bubble-sort/#二算法性质)
            - [2.1 时间复杂度](./bubble-sort/#21-时间复杂度)
            - [2.2 空间复杂度](./bubble-sort/#22-空间复杂度)
            - [2.3 其它性质](./bubble-sort/#23-其它性质)
        - [三、算法实现](./bubble-sort/#三算法实现)
            - [3.1 多语言代码](./bubble-sort/#31-多语言代码)
            - [3.2 改进代码](./bubble-sort/#32-改进代码)
            - [3.3 自我测试](./bubble-sort/#33-自我测试)
    - [插入排序](./insertion-sort/)
        - [一、算法图解](./insertion-sort/#一算法图解)
            - [1.1 Manim 动画演示](./insertion-sort/#11-manim-动画演示)
            - [1.2 Mermaid 流程图示意](./insertion-sort/#12-mermaid-流程图示意)
        - [二、算法性质](./insertion-sort/#二算法性质)
            - [2.1 时间复杂度](./insertion-sort/#21-时间复杂度)
            - [2.2 空间复杂度](./insertion-sort/#22-空间复杂度)
            - [2.3 其它性质](./insertion-sort/#23-其它性质)
        - [三、算法实现](./insertion-sort/#三算法实现)
            - [3.1 多语言代码](./insertion-sort/#31-多语言代码)
            - [3.2 改进代码](./insertion-sort/#32-改进代码)
            - [3.3 自我测试](./insertion-sort/#33-自我测试)
```

| 排序算法    | 时间复杂度                                                 | 空间复杂度            | 稳定性 | 就地性 | 自适应性 | 基于比较 |
| :---------- | :--------------------------------------------------------- | :-------------------- | :----- | :----- | :------- | :------- |
| 1. 选择排序 | $\Theta(n^2)$, $\mathcal{O}(n^2)$, $\Omega(n^2)$           | $\mathcal{O}(1)$      | ✘      | ✔      | ✘        | ✔        |
| 2. 冒泡排序 | $\Theta(n^2)$, $\mathcal{O}(n^2)$, $\Omega(n)$             | $\mathcal{O}(1)$      | ✔      | ✔      | ✔        | ✔        |
| 3. 插入排序 | $\Theta(n^2)$, $\mathcal{O}(n^2)$, $\Omega(n)$             | $\mathcal{O}(1)$      | ✔      | ✔      | ✔        | ✔        |
| 4. 希尔排序 | $\Theta(n \log n)$ ~ $\Theta(n^2)$                         | $\mathcal{O}(1)$      | ✘      | ✔      | ✘        | ✔        |
| 5. 归并排序 | $\Theta(n \log n)$                                         | $\mathcal{O}(n)$      | ✔      | ✘      | ✘        | ✔        |
| 6. 快速排序 | $\Theta(n \log n)$, $\mathcal{O}(n^2)$, $\Omega(n \log n)$ | $\mathcal{O}(\log n)$ | ✘      | ✔      | ✘        | ✔        |
| 7. 堆排序   | $\Theta(n \log n)$                                         | $\mathcal{O}(1)$      | ✘      | ✔      | ✘        | ✔        |
| 8. 计数排序 | $\Theta(n+k)$                                              | $\mathcal{O}(n+k)$    | ✔      | ✘      | ✘        | ✘        |
| 9. 基数排序 | $\Theta(n+k)$, $\mathcal{O}(n^2)$, $\Omega(n+k)$           | $\mathcal{O}(n+k)$    | ✔      | ✘      | ✘        | ✘        |
| 10. 桶排序  | $\Theta(d\times(n+k))$                                     | $\mathcal{O}(n+k)$    | ✔      | ✘      | ✘        | ✘        |
