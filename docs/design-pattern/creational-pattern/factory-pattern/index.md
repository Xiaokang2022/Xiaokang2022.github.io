---
comments: true
---

# 工厂模式

!!! warning "警告：当前页面内容仍处于草稿状态！"

工厂模式可以简单理解为一种动态创建实例的模式。何为工厂？通俗意义上的工厂是一个生产建筑，而在设计模式中，这里的工厂生产的产品就是类的实例。普通的静态创建实例就是实例化给定的类，但当我们在定义阶段无法确定需要实例化哪个类的时候，就应该使用工厂模式在运行时地动态地创建实例。

下面是一个简单情景：

假设我们需要根据用户输入的字符串去绘制不同的图形：

```python
match input():
    case "Square": print("Draw a square.")
    case "Circle": print("Draw a circle.")
    case "Triangle": print("Draw a triangle.")
    case _: print("Draw nothing!")
```

现在假设绘制这些图形的操作就是创建不同的形状类的实例，那么你把它封装起来它就变成了一个工厂了，一个根据指定的字符串生产不同形状类实例的工厂。

```mermaid
flowchart LR
    0([用户输入])
    1[形状类工厂]
    2([形状实例])

    0 --str--> 1 --instance--> 2
```

大致就如上图那样。现在我们把它的封装写出来：

```python exec source="material-block" result="ansi" hl_lines="26" title="工厂模式的简单封装实现"
import abc


class Shape(abc.ABC):
    """形状的抽象基类"""


class Circle(Shape):
    """圆形类"""


class Square(Shape):
    """正方形类"""


class Triangle(Shape):
    """三角形类"""


class ShapeFactory:
    """形状工厂类"""

    @classmethod
    def produce(cls, __shape_type: str, /) -> Shape | None:
        """生产指定类型的形状实例"""
        match __shape_type.lower():
            case "circle": return Circle()
            case "square": return Square()
            case "triangle": return Triangle()
            case _: return None


print(ShapeFactory.produce("circle").__class__.__name__)
print(ShapeFactory.produce("square").__class__.__name__)
print(ShapeFactory.produce("triangle").__class__.__name__)
print(ShapeFactory.produce("unknown").__class__.__name__)
```

/// question | 猜你想问：为什么不直接传入类型而是要传入字符串呢？使用类型不是更加准确吗？

首先，需要注意一点的是，工厂模式是动态创建实例，它这个动态不仅仅是在于类型的动态，而是更加宽泛的，输入是动态的。也就说，调用者在事先并不知道有哪些类型可以被“生产”出来。

///

如果说，需要更加准确一点的写法，应该是限定输入的范围，告知调用者，能“生产”的类型有哪些，比如：

=== "类型注解优化"

    ```python exec source="material-block" result="ansi" hl_lines="25 27 37"
    import abc
    from typing import Literal


    class Shape(abc.ABC):
        """形状的抽象基类"""


    class _Circle(Shape):
        """圆形类"""


    class _Square(Shape):
        """正方形类"""


    class _Triangle(Shape):
        """三角形类"""


    class ShapeFactory:
        """形状工厂类"""

        @classmethod
        def produce(cls, __shape_type: Literal["circle", "square", "triangle"], /) -> Shape | None:
            """生产指定类型的形状实例"""
            match __shape_type.lower():
                case "circle": return _Circle()
                case "square": return _Square()
                case "triangle": return _Triangle()
                case _: return None  # 防御性编程


    print(ShapeFactory.produce("circle").__class__.__name__)
    print(ShapeFactory.produce("square").__class__.__name__)
    print(ShapeFactory.produce("triangle").__class__.__name__)
    print(ShapeFactory.produce("unknown").__class__.__name__)  # IDE 将提示参数不正确
    ```

=== "枚举类型优化"

    ```python exec source="material-block" result="ansi" hl_lines="21-25 32 34"
    import abc
    import enum


    class Shape(abc.ABC):
        """形状的抽象基类"""


    class _Circle(Shape):
        """圆形类"""


    class _Square(Shape):
        """正方形类"""


    class _Triangle(Shape):
        """三角形类"""


    class ShapeEnum(enum.StrEnum):
        """形状枚举类"""
        CIRCLE = "circle"
        SQUARE = "square"
        TRIANGLE = "triangle"


    class ShapeFactory:
        """形状工厂类"""

        @classmethod
        def produce(cls, __shape_type: ShapeEnum, /) -> Shape:
            """生产指定类型的形状实例"""
            match __shape_type:
                case ShapeEnum.CIRCLE: return _Circle()
                case ShapeEnum.SQUARE: return _Square()
                case ShapeEnum.TRIANGLE: return _Triangle()
                case _: raise ValueError("Invalid shape type.")


    print(ShapeFactory.produce(ShapeEnum.CIRCLE).__class__.__name__)
    print(ShapeFactory.produce(ShapeEnum.SQUARE).__class__.__name__)
    print(ShapeFactory.produce(ShapeEnum.TRIANGLE).__class__.__name__)
    ```

上面提供了两种优化思路，一种是利用类型注解进行君子约定，告知调用者应该传入哪些值。但更好的做法是第二种，通过枚举强制约束，传入其它非预期的值将引发 `#!py ValueError`。以上代码中，以单下划线开头的类属于约定上的保护类，对外应该不可见，此时可以任务调用者无法知道实际的类型有哪些，只能通过工厂进行调用。

对于无状态需要维护的（没有配置这种），非动态创建的工厂（即抽象工厂生产的工厂，[抽象工厂模式](../abstract-factory-pattern/index.md)会讲）一般会结合使用后面会讲到的[单例模式](../singleton-pattern/index.md)，因为这些工厂不需要多个不同的实例，或者说创建多个不同的工厂实例没有意义。在 Python 中直接使用类方法即可。

当然，并不是一定要使用工厂类，使用工厂函数也是可以的，但为了方便扩展，一般都会使用工厂类。

!!! success "一句话总结：工厂模式就是动态创建实例"
