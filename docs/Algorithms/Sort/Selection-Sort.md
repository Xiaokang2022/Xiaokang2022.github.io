---
comments: true
tags:
    - 排序
---

# 选择排序（Selection Sort）

## Manim 动画演示

![Selection-Sort](./images/Selection-Sort.webp)

??? note "Manim 动画演示源代码"

    ```python { .blur hl_lines="77 78 80 82 84 89" }
    """Manim Animation for Selection Sort."""

    from __future__ import annotations as _

    from math import sqrt
    from os import remove
    from subprocess import run
    from typing import override

    from manim import *

    GOLDEN_RATIO: float = (sqrt(5) - 1) / 2
    RADIUS: float = (1 - GOLDEN_RATIO) / 4
    OPACITY: float = (sqrt(5) + 1) / 4

    FONT_CHINESE: str = "LXGW WenKai"
    FONT_ENGLISH: str = "Comic Mono"

    MIDDLE_GRAY: ManimColor = ManimColor.from_rgb((0.5, 0.5, 0.5))


    class Manim(Scene):
        """A Scene is the canvas of my animation."""

        @override
        def setup(self) -> None:
            title = Text("选择排序", font=FONT_CHINESE, weight=BOLD, color=MIDDLE_GRAY)
            title.to_edge(UP)
            mark = Text("xiaokang2022.github.io", font=FONT_ENGLISH, font_size=18, color=MIDDLE_GRAY)
            mark.to_corner(DR)
            self.add(title, mark)

        @override
        def tear_down(self) -> None:
            self.wait()

        @override
        def construct(self) -> None:
            data = [4, 6, 3, 2, 7, 1, 5]

            bars = {
                i: (
                    Text(
                        f"{v}",
                        font=FONT_ENGLISH,
                        font_size=32,
                        color=MIDDLE_GRAY,
                    ),
                    RoundedRectangle(
                        RADIUS,
                        fill_opacity=OPACITY,
                        width=GOLDEN_RATIO,
                        height=GOLDEN_RATIO*v,
                        fill_color=BLUE,
                        stroke_color=MIDDLE_GRAY,
                    ),

                ) for i, v in enumerate(data)
            }

            for i, (value, rectangle) in bars.items():
                rectangle.move_to(np.array([i-(len(data)/2)+0.5, 0, 0]))
                rectangle.align_to(np.array([0, -2.5, 0]), DOWN)
                value.next_to(rectangle, UP)

                index = Text(
                    f"{i}",
                    font=FONT_ENGLISH,
                    font_size=32,
                    color=MIDDLE_GRAY,
                ).next_to(rectangle, DOWN)

                self.add(index, rectangle, value)

            self.wait()

            for i in range(length := len(data)):
                min_index = i
                self.play(bars[i][1].animate.set_fill(RED), run_time=GOLDEN_RATIO)
                for j in range(i + 1, length):
                    self.play(bars[j][1].animate.set_fill(YELLOW), run_time=GOLDEN_RATIO)
                    if data[j] < data[min_index]:
                        self.play(bars[min_index][1].animate.set_fill(BLUE), run_time=GOLDEN_RATIO)
                        min_index = j
                        self.play(bars[j][1].animate.set_fill(RED), run_time=GOLDEN_RATIO)
                    else:
                        self.play(bars[j][1].animate.set_fill(BLUE), run_time=GOLDEN_RATIO)

                data[i], data[min_index] = data[min_index], data[i]

                animations = [m.animate.shift(RIGHT*(min_index-i)) for m in bars[i]]
                animations += [m.animate.shift(LEFT*(min_index-i)) for m in bars[min_index]]
                self.play(*animations, run_time=GOLDEN_RATIO)
                self.play(bars[min_index][1].animate.set_fill(GREEN), run_time=GOLDEN_RATIO)

                bars[i], bars[min_index] = bars[min_index], bars[i]


    if __name__ == "__main__":
        config.format = "png"
        config.transparent = True

        Manim().render()

        PATH: str = ".\\media\\images"

        run(
            "ffmpeg "
            "-framerate 60 "
            f"-i {PATH}\\Manim%04d.png "
            "-c:v libwebp_anim "
            "-q 85 "
            "-compression_level 6 "
            "-loop 0 "
            "-preset text "
            "output.webp",
            shell=True,
            check=True,
        )

        frame = 0

        while True:
            try:
                remove(f"{PATH}\\Manim{frame:04d}.png")
            except FileNotFoundError:
                break
            frame += 1
    ```

## 多语言实现

=== "🔵 Python"

    ```python hl_lines="3 6 7"
    def selection_sort(arr: list[int]) -> None:
        for i in range(len(arr)):
            min_index = i
            for j in range(i + 1, len(arr)):
                if arr[j] < arr[min_index]:
                    min_index = j
            arr[i], arr[min_index] = arr[min_index], arr[i]
    ```

    ??? example "可视化代码 [:material-open-in-new:{.middle}](# "全屏查看")"

        敬请期待……

=== "🔴 C++"

    ```cpp hl_lines="3 6 9"
    void selectionSort(std::vector<int> &arr) {
        for (int i = 0, minIndex; i < arr.size(); ++i) {
            minIndex = i;
            for (int j = i + 1; j < arr.size(); ++j) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            std::swap(arr[i], arr[minIndex]);
        }
    }
    ```

=== "🟠 Java"

    ```java
    ```

=== "🟡 TypeScript"

    ```typescript
    ```

## 自我测试

/// tip | 试一试 [[启动环境](javascript:void(thebe.bootstrap(thebe_options)); "启动 Python3.11 交互式编程环境")]

</br>
<pre data-executable>
%reset -f

def selection_sort(arr: list[int]) -> None:
    pass  # 请将代码写在这里

if __name__ == "__main__":
    arr: list[int] = [4, 6, 3, 2, 7, 1, 5]
    selection_sort(arr)
    print(*arr)
</pre>

///
