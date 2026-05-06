---
layout: default
---

<section class="site-hero">
  <img class="hero-avatar" src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="Xuan Feng" width="120" height="120">
  <div class="hero-body">
    <h1 class="hero-greeting">Hi, I'm Xuan Feng</h1>
    <p class="hero-tagline">Senior researcher at Microsoft Research, building secure/reliable/performant agentic systems and exploring system intelligence.</p>
    <p class="hero-socials">
      <a href="https://scholar.google.com/citations?user=Sld7-FoAAAAJ">Scholar</a>
      <a href="https://xuafeng.github.io/CV-EN-2021.pdf">CV</a>
      <a href="mailto:xuafeng@microsoft.com">Email</a>
    </p>
  </div>
</section>

<hr class="section-divider">

I am a senior researcher at [Microsoft Research Asia - Vancouver Lab](https://www.microsoft.com/en-us/research/group/microsoft-research-asia-vancouver/) working on bridging the gap between general artificial intelligence and its real-world applications, specifically work on next-generation agentic systems.

Previously, I was a security researcher at the [Trustworthy Systems group](https://www.microsoft.com/en-us/research/group/trustworthy-systems-asia/) in the Systems and Networking research area at [Microsoft Research Asia - Beijing](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/). I received my Ph.D. in [Institute of Information Engineering](http://www.iie.ac.cn/) (IIE), Chinese Academy of Sciences (CAS) in July 2020. I visited [Indiana University Bloomington](https://www.indiana.edu/) as a visiting scholar (supervised by Prof. XiaoFeng Wang) in 2018.

My research interests include _Agentic System, System Intelligence, AI for Security_, with the specific focus on using a AI-driven approach to identify and address security problems, system problems, and any other real-world impactful problems. I am interested in proposing new methods or building AI-powered tools to empower your daily productivity.

<p class="contact-line">Feel free to reach me at xuafeng (at) microsoft.com, if you have questions. Thanks :)</p>

## News

<div class="news-list">
  <p class="news-item"><time datetime="2025-11-19">Nov 19, 2025</time><span>Our blog "<a href="https://www.sigops.org/2025/defining-system-intelligence/">Defining System Intelligence</a>", is posted on SIGOPS.</span></p>
  <p class="news-item"><time datetime="2025-08-27">Aug 27, 2025</time><span>We are hiring interns for <em><a href="https://sys-intelligence.github.io/">system intelligence</a></em> project. If you are interested, please send me an email with your CV.</span></p>
  <p class="news-item"><time datetime="2024-03-16">Mar 16, 2024</time><span>I moved to Vancouver Lab, Microsoft Research Asia. Working on bridging the gap between general artificial intelligence and its real-world applications.</span></p>
  <p class="news-item"><time datetime="2021-09-10">Sep 10, 2021</time><span>We are hiring <a href="https://www.msra.cn/zh-cn/jobs/interns/systems-research-group-research-intern?language=chinese">full-time interns</a>, who have strong interests in network security or IoT security. If you are interested, please send me an email with your CV.</span></p>
  <p class="news-item"><time datetime="2020-08-17">Aug 17, 2020</time><span>I joined Microsoft Research Asia - Beijing as a researcher.</span></p>
</div>

## Projects

<p class="project-intro">My recent work moves from AI-assisted security toward agentic systems and, more broadly, system intelligence.</p>

<div class="project-narrative" markdown="1">

<div class="project-group" markdown="1">
<p class="project-label">Current focus</p>

<section class="project-block project-block-featured" markdown="1">
  <div class="project-head">
    <h3>System Intelligence</h3>
    <span class="project-period">2025/08 - present</span>
  </div>

<p class="project-summary">Enabling AI to design, implement, and maintain computing systems.</p>

Current AI can now write code, but not systems. It lacks the capacity to reason about architecture, trade-offs, and timeless design principles. Enabling AI to design, implement, and maintain computing systems is a critical leap toward AI's next level of capabilities.

We are activately pursing system intelligence. See [our project page](https://sys-intelligence.github.io/) and [our recent blogs](https://sys-intelligence.github.io/blog.html) for more details.

+ System Intelligence Benchmark: [GitHub](https://github.com/sys-intelligence/system-intelligence-benchmark)

</section>

<section class="project-block" markdown="1">
  <div class="project-head">
    <h3>Agentic Systems</h3>
    <span class="project-period">2023/10 - present</span>
  </div>

<p class="project-summary">Building production-ready agentic systems that can be auto tuned and evoloved.</p>

We envision a future where there will be two main types of systems: AI Infra Systems and Agentic Systems. AI Infra Systems are more clear and well-defined, while Agentic Systems are still in a very early stage and more open-ended.

We are exploring this direction by **building production-ready agentic systems**, which are used in MS production teams to accelare their daily workflow. The key explored techniques include

+ Agent Benchmarking: defines which tasks you want AI to solve - it is critical and challenging. It includes what's the task abstract, how to score the task, how to collect enough and representative tasks (as eval or training datasets), etc.
+ Agent Building: how to feed needed tools, conext, domain expertise to LLM and have a runnable agentic workflow; then, how to tune the agent harness/prompt/code/context, or even the model to make it to achieve desired performance.
+ Agent Serving and Orchestration: when many agents are welled builded, how to orchestrate them to serve 1M users and make it continue evolving, etc.
</section>

</div>

<div class="project-group" markdown="1">
<p class="project-label">Earlier foundation</p>

<section class="project-block" markdown="1">
  <div class="project-head">
    <h3>AI + Security</h3>
    <span class="project-period">2014 - present</span>
  </div>

<p class="project-summary">Applying AI techniques to operational and defensive security problems in real-world systems.</p>

My Ph.D researches focused on using AI techniques (NLP) to enhance operational security in IoT domains. With the new AI technologies (LLM) emerging, I realized that there is a great potential to apply them for more broader security areas. Many of our research have been applied in real-world products.

+ LLM for Asset Discovery: leverage LLM to write rules for device discovery (w/ MS Defender EASM/MDE), 2022/12
+ LLM for Bot Detection: leverage LLM to label bot accounts accessing MS Copilot (w/ MS Copilot), 2023/05
+ LLM for OSINT Processing: leverage LLM to write production quality TI reports ([paper](https://www.microsoft.com/en-us/research/publication/cyberthreat-eval-can-large-language-models-automate-real-world-threat-research/)) (w/ MS MDTI and Security Copilot), 2024/07
+ LLM for Static Analysis: measure the performance of LLM for detecting real-world C/C++ UaF and Rust memmory-related vulnerabilities, specifically for benchmark and comprehensive insights
+ Secure Scripting Language Generation: enable lightweight LLMs to generate secure scripting language (PowerShell)
</section>

</div>

</div>

## Selected Publications

<ul class="publication-list">
  <li>
    <cite>CyberThreat-Eval: Can Large Language Models Automate Real-World Threat Research?</cite>
    <span class="pub-meta">Xiangsen Chen, Xuan Feng, Shuo Chen, Sudipto Rakshit, Diana Duvieilh, Ashley Picone, Nan Tang.</span>
    <span class="pub-venue">Transactions on Machine Learning Research, 2025</span>
  </li>
  <li>
    <cite>Beyond Prompt Content: Enhancing LLM Performance via Content-Format Integrated Prompt Optimization</cite>
    <span class="pub-meta">Yuanye Liu, Jiahang Xu, Li Lyna Zhang, Qi Chen, <strong>Xuan Feng</strong>, Yang Chen, Zhongxin Guo, Yuqing Yang, Peng Cheng.</span>
    <span class="pub-venue">arXiv preprint arXiv:2502.04295</span>
  </li>
  <li>
    <cite>Sigma: Differential Rescaling of Query, Key and Value for Efficient Language Models</cite>
    <span class="pub-meta">Zhenghao Lin, Zihao Tang, Xiao Liu, Yeyun Gong, Yi Cheng, Qi Chen, Hang Li, Ying Xin, Ziyue Yang, Kailai Yang, Yu Yan, Xiao Liang, Shuai Lu, Yiming Huang, Zheheng Luo, Lei Qu, <strong>Xuan Feng</strong>, Yaoxiang Wang, Yuqing Xia, Feiyang Chen, Yuting Jiang, Yasen Hu, Hao Ni, Binyang Li, Guoshuai Zhao, Jui-Hao Chiang, Zhongxin Guo, Chen Lin, Kun Kuang, Wenjie Li, Yelong Shen, Jian Jiao, Peng Cheng, Mao Yang.</span>
    <span class="pub-venue">arXiv preprint arXiv:2501.13629</span>
  </li>
  <li>
    <cite>Understanding and Securing Device Vulnerabilities through Automated BugReport Analysis.</cite>
    <span class="pub-meta"><strong>Xuan Feng</strong>, Xiaojing Liao, XiaoFeng Wang, Haining Wang, Qiang Li, Kai Yang, Hongsong Zhu, Limin Sun.</span>
    <span class="pub-venue">Proceedings of the USENIX Security Symposium 2019 (SEC'19), August 14-16, 2019, Santa Clara, CA, USA. (CCF-A)</span>
  </li>
  <li>
    <cite>Acquisitional Rule-based Engine for Discovering Internet-of-Thing Devices.</cite>
    <span class="pub-meta"><strong>Xuan Feng</strong>, Qiang Li, Haining Wang, Limin Sun.</span>
    <span class="pub-venue">Proceedings of the USENIX Security Symposium 2018 (SEC'18), August 15-17, 2018, Baltimore, MD, USA. (CCF-A)</span>
  </li>
  <li>
    <cite>Resident Evil: Understanding Residential IP Proxy as a Dark Service.</cite>
    <span class="pub-meta">Xianghang Mi, <strong>Xuan Feng</strong>, Xiaojing Liao, Baojun Liu, XiaoFeng Wang, Feng Qian, Sumayah Alrwais, Limin Sun, Ying Liu.</span>
    <span class="pub-venue">Proceedings of the 40th IEEE Symposium on Security and Privacy (S&amp;P 2019). (CCF-A)</span>
  </li>
  <li>
    <cite>Dangerous Skills: Understanding and Mitigating Security Risks of Voice-Controlled Third-Party Functions on Virtual Personal Assistant Systems.</cite>
    <span class="pub-meta">Nan Zhang, Xianghang Mi, <strong>Xuan Feng</strong>, XiaoFeng Wang, Yuan Tian, Feng Qian.</span>
    <span class="pub-venue">Proceedings of the 40th IEEE Symposium on Security and Privacy (S&amp;P'2019). (CCF-A) <strong>CSAW'19 Best Paper Award</strong> (3rd Place, 3 out of 80)</span>
  </li>
  <li>
    <cite>Demystifying Hidden Privacy Settings in Mobile Apps.</cite>
    <span class="pub-meta">Yi Chen, Mingming Zha, Nan Zhang, Dandan Xu, Qianqian Zhao, <strong>Xuan Feng</strong>, Kan Yuan, Ya Su, Yuan Tian, Kai Chen, Xiaofeng Wang, Wei Zou.</span>
    <span class="pub-venue">Proceedings of the 40th IEEE Symposium on Security and Privacy (S&amp;P'2019). (CCF-A)</span>
  </li>
  <li>
    <cite>Stealthy Porn: Understanding Real-World Adversarial Images for Illicit Online Promotion.</cite>
    <span class="pub-meta">Kan Yuan, Di Tang, Xiaojing Liao, XiaoFeng Wang, <strong>Xuan Feng</strong>, Yi Chen, Menghan Sun, Haoran Lu, Kehuan Zhang.</span>
    <span class="pub-venue">Proceedings of the 40th IEEE Symposium on Security and Privacy (S&amp;P'2019).</span>
  </li>
  <li>
    <cite>Characterizing Industrial Control Equipments on the Internet.</cite>
    <span class="pub-meta"><strong>Xuan Feng</strong>, Qiang Li, Haining Wang, Limin Sun.</span>
    <span class="pub-venue">IEEE International Conference on Network Protocols (ICNP'16), November 8-11, 2016, Singapore. (CCF-B)</span>
  </li>
</ul>

## Statistics

<div class="stats">
Total Unique Visitors: <!-- hitwebcounter Code START -->
<a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7968650&style=0024&nbdigits=5&type=ip&initCount=0" title="Free Counter" alt="web counter" border="0" /></a>
<div>
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=3ICdSQOHVTlzy261jUfWIyD5i8hQ0u7c2I9QDBIDz-0"></script>
</div>
</div>
