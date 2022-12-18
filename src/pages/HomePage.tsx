import '@material/mwc-button';
import { A } from '@solidjs/router';
import { Component } from 'solid-js';

const HomePage: Component = () => (
  <div class="max-w-none p-4 card prose">
    <h1>政治坐标系测试，但是向量</h1>
    <p>你将会看到一系列观点，请点击按钮选择你对于每个观点的看法。</p>
    <p>
      <b>提示：</b>
      本测试的意图在于评估你的政治观念，即政治的“应然”而非“实然”，请忽略部分题目在当下的可行性。若对题目摇摆不定，请跟着第一感觉走；若对某道题难以理解，可试着思考题目观点的对立面。
    </p>
    <p>
      <b>
        声明：为了保证本测试的区分度，
        <span class="text-red-600">可能会出现高度偏激或有冒犯性的内容</span>
        ，题目观点并不代表制作者的观点。
      </b>
    </p>
    <p>
      <b>隐私声明：</b>
      本测试完全由前端实现，代码<a href="https://github.com/KMarxist/IdeoVector">全部开源</a>
      ，我们不会收集你的任何个人信息。
    </p>
    <p>
      传统政治坐标系测试会将你的回答对应到各个轴上，但本测试会建立一个 x 维的坐标系（x =
      题数），把你对每道题的回答作为值，再把这些值组成一个向量返回给你。这样你就能通过
      <a href="https://github.com/KMarxist/IdeoVector">距离公式</a>知道你和别人的“距离”了。
    </p>
    <A href="/IdeoVector/quest">
      <mwc-button label="开始测试" raised />
    </A>
    <A href="/IdeoVector/distance" class="ml-2">
      <mwc-button outlined label="距离计算器" />
    </A>
  </div>
);

export default HomePage;
