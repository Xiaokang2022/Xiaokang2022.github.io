---
comments: true
---

# 单例模式

!!! warning "警告：当前页面内容仍处于草稿状态！"

应用了单例模式的类，无论被创建多少个实例，它们本质上都是同一个。主要的应用场景在于，如果一个类它在当前程序中只应该被创建一个，创建多个没有意义或者会造成一些非预期的行为时，就应该使用单例模式。

在 Python 中有很多方式可以实现单例，比如直接在当前类上做一些处理来实现：

```python exec source="material-block" result="ansi" hl_lines="9 12-14" title="修改当前类的方式"
from __future__ import annotations as _

from typing import Any, ClassVar, Self


class Foo:
    """单例模式样例"""

    _instance: ClassVar[Self | None] = None  # 当前类的单例实例

    def __new__(cls: type[Self], *args: Any, **kwargs: Any) -> Self:
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        if hasattr(self, "_initialized"):  # 防止重复初始化
            return

        self._initialized: bool = True

        print(f"Class {self.__class__.__name__} initialized!")


class Bar(Foo):
    """继承自单例超类的子类"""


print(Foo() is Foo())
print(Bar() is Bar())
print(Foo() is Bar())
```

也可以使用继承单例基类的方式实现：

```python exec source="material-block" result="ansi" hl_lines="9 12-14" title="继承单例基类的方式"
from __future__ import annotations as _

from typing import Any, ClassVar, Self


class SingletonBase[_T]:
    """单例基类"""

    _instances: dict[type[_T], _T] = {}  # 类与实例的映射

    def __new__(cls: type[_T], *args: Any, **kwargs: Any) -> _T:
        if cls not in cls._instances:
            cls._instances[cls] = super().__new__(cls, *args, **kwargs)
        return cls._instances[cls]


class Foo(SingletonBase):
    """继承单例基类的超类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        if hasattr(self, "_initialized"):  # 防止重复初始化
            return

        self._initialized: bool = True

        print(f"Class {self.__class__.__name__} initialized!")


class Bar(Foo):
    """继承单例超类的子类"""


print(Foo() is Foo())
print(Bar() is Bar())
print(Foo() is Bar())
```

使用单例元类的方式是最好的，可以省去一些麻烦：

```python exec source="material-block" result="ansi" hl_lines="9 12-14" title="使用单例元类的方式"
from __future__ import annotations as _

from typing import Any, ClassVar


class SingletonMeta[_T](type):
    """单例元类"""

    _instances: ClassVar[dict[type[_T], _T]] = {}

    def __call__(cls: type[_T], *args: Any, **kwargs: Any) -> _T:
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]


class Foo(metaclass=SingletonMeta):
    """使用单例元类的超类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        print(f"Class {self.__class__.__name__} initialized!")


class Bar(Foo):
    """继承单例超类的子类"""


print(Foo() is Foo())
print(Bar() is Bar())
print(Foo() is Bar())
```

也可以使用装饰器的方式，使用装饰器有两种，一种是函数装饰器，还有一种是类装饰器，下面是使用函数装饰器的方式：

```python exec source="material-block" result="ansi" hl_lines="11 16-18" title="使用函数装饰器的方式"
from __future__ import annotations as _

import functools
from collections.abc import Callable
from typing import Any


def singleton[**_P, _T](cls: type[_T]) -> Callable[_P, _T]:
    """函数式单例装饰器"""

    instances: dict[type[_T], _T] = {}

    @functools.wraps(cls)
    def _wrapper(*args: _P.args, **kwargs: _P.kwargs) -> _T:
        """包装函数"""
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return _wrapper


@singleton
class Foo:
    """被函数式单例装饰器装饰的类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        print(f"Class {self.__class__.__name__} initialized!")


@singleton
class Bar:
    """被函数式单例装饰器装饰的类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        print(f"Class {self.__class__.__name__} initialized!")


print(Foo() is Foo())
print(Bar() is Bar())
print(Foo() is Bar())
```

但使用函数式单例装饰器有个致命问题，这个装饰器改变了被装饰类的本质，其从类变成了函数，因此无法被继承，也无法通过相关接口来判断它是否为某个类的子类。但类装饰器可以解决这个问题，下面是使用类装饰器的方式：

```python exec source="material-block" result="ansi" hl_lines="9 12-14" title="使用类装饰器的方式"
from __future__ import annotations as _

from typing import Any


class Singleton[_T]:
    """类式单例装饰器，可继承、类型安全"""
    _instances: dict[type, Any] = {}

    def __init__(self, cls: type[_T], *args: Any, **kwargs: Any) -> None:
        self._cls = cls
        self._args = args
        self._kwargs = kwargs

    def __call__(self, *args: Any, **kwargs: Any) -> Any:
        if self._cls not in self._instances:
            self._instances[self._cls] = self._cls(*self._args, **self._kwargs)
        return self._instances[self._cls]

    def __getattr__(self, name: str) -> Any:
        """让装饰后的类保留原类属性"""
        return getattr(self._cls, name)


@Singleton
class Foo:
    """被函数式单例装饰器装饰的类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        print(f"Class {self.__class__.__name__} initialized!")


@Singleton
class Bar:
    """被函数式单例装饰器装饰的类"""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        print(f"Class {self.__class__.__name__} initialized!")


print(Foo() is Foo())
print(Bar() is Bar())
print(Foo() is Bar())
```

!!! success "一句话总结：单例模式就是无论怎么实例化都只有唯一的实例"
