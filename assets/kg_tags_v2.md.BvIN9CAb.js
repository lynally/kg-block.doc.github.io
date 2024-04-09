import{_ as i,c as a,o as s,a2 as l}from"./chunks/framework.B_XxXr4T.js";const u=JSON.parse('{"title":"标签组件","description":"","frontmatter":{},"headers":[],"relativePath":"kg_tags_v2.md","filePath":"kg_tags_v2.md"}'),t={name:"kg_tags_v2.md"},e=l(`<h1 id="标签组件" tabindex="-1">标签组件 <a class="header-anchor" href="#标签组件" aria-label="Permalink to &quot;标签组件&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介： <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介：&quot;">​</a></h2><ul><li>星光探索 标签组件vue2版本</li></ul><h2 id="📦-安装" tabindex="-1">📦 安装 <a class="header-anchor" href="#📦-安装" aria-label="Permalink to &quot;📦 安装&quot;">​</a></h2><p>通过npm</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> knowl-ui-tags2</span></span></code></pre></div><p>通过yarn</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> knowl-ui-tags2</span></span></code></pre></div><h2 id="🔨-快速开始" tabindex="-1">🔨 快速开始 <a class="header-anchor" href="#🔨-快速开始" aria-label="Permalink to &quot;🔨 快速开始&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> knowl_tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;knowl-ui-tags2&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;knowl-ui-tags2/lib/main.css&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(knowl_tags, {store: vuex对象})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ul><li>pid: 选中项目id string</li><li>fdata: {} <ul><li>filter 获取类别（非信源）appcategory/getAppCategoryList</li><li>filter_xinyuan: 获取类别（信源）appSourceCol/list</li><li>xinyuan_mapmping: 获取信源对应关系 appSourceMapping/getSourceMapping</li><li>xinyuan_head: 获取信源表头 appSourceCol/getAllList</li><li>fliterCount: 标签数量 {} <ul><li>label_id:num</li></ul></li></ul></li></ul><h2 id="暴露的方法" tabindex="-1">暴露的方法 <a class="header-anchor" href="#暴露的方法" aria-label="Permalink to &quot;暴露的方法&quot;">​</a></h2><ul><li>getSelFilter: 获取选中的标签</li><li>getShowFilter： 获取显示的标签</li><li>getAllFilter: 获取全部标签</li><li>setSelFilter: 设置选中的标签 参数fid数组 [1,2,3]</li><li>clearAllData：切换项目的时候情况数据</li><li>setShowCount: 设置显示类别数量开关,默认 true 参数xxx ：boolean</li><li>setShowFilter_byCount：只显示有数量的类别,默认false 参数xxx:boolean</li><li>setLanguage: 国际化设置,参数 字符串 zh 或 en, 默认是 zh</li></ul><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><ul><li>selFilterChange: 选中标签时触发</li></ul>`,16),n=[e];function h(p,r,k,o,d,g){return s(),a("div",null,n)}const E=i(t,[["render",h]]);export{u as __pageData,E as default};