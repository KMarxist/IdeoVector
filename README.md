# IdeoVector

政治坐标系测试，但是 82 维。

## 距离计算公式

$$
\sqrt{\sum^{n}_{i=1}{(x_i^2-y_i^2)}}
$$

其中 $x$ 、 $y$ 分别是两个人的回答， $n$ 是问题的数量。本套测试共 $82$ 题，因此 $n=82$。

每道题有 5 个选项，分别是“强烈同意”“同意”“中立 / 不确定”“反对”“强烈反对”，对应的值是 2、1、0、-1、-2。