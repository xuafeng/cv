---
layout: home
---

<!-- [**<font color= '#123693'> cv </font>**](https://xuafeng.github.io/CV-EN-2021.pdf) &nbsp; &nbsp; &nbsp;&nbsp;[**<font color= '#123693'> blog </font>**](https://xuafeng.github.io/blogs)  &nbsp; &nbsp; &nbsp;&nbsp; [**<font color= '#123693'> publications </font>**](https://xuafeng.github.io/cv/#:~:text=Selected%20Publications) -->

## about
I am a senior researcher at [Microsoft Research Asia – Vancouver Lab](https://www.microsoft.com/en-us/research/group/microsoft-research-asia-vancouver/) working on bridging the gap between general artificial intelligence and its real-world applications, specifically work on next-generation agent systems. Previously, I was a security researcher at the [Trustworthy Systems group](https://www.microsoft.com/en-us/research/group/trustworthy-systems-asia/) in the Systems and Networking research area at [Microsoft Research Asia - Beijing](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/). I received my Ph.D. in [Institute of Information Engineering](http://www.iie.ac.cn/) (IIE), Chinese Academy of Sciences (CAS) in July 2020. I visited [Indiana University Bloomington](https://www.indiana.edu/) as a visiting scholar (supervised by Prof. XiaoFeng Wang) in 2018.

My research interests include  _Future Agent System, System Intelligence, AI for operational/defensive security_, with the specific focus on using a AI-driven approach to identify and address security problems, system problems, and any other real-world impactful problems. I am interested in proposing new methods or building AI-powered tools to empower your daily productivity.

Feel free to reach me at xuafeng (at) microsoft.com, if you have questions. Thanks :)

## news 
+ **Nov 19, 2025** &nbsp; Our blog "[Defining System Intelligence](https://www.sigops.org/2025/defining-system-intelligence/)", is posted on SIGOPS.
+ **Aug 27, 2025** &nbsp; We are hiring interns for _[system intelligence](https://sys-intelligence.github.io/)_ project. If you are interested, please send me an email with your CV.

+ **Mar 16, 2024** &nbsp; I moved to Vancouver Lab, Microsoft Research Asia. Working on bridging the gap between general artificial intelligence and its real-world applications.
+ **Sep 10, 2021** &nbsp; We are hiring [full-time interns](https://www.msra.cn/zh-cn/jobs/interns/systems-research-group-research-intern?language=chinese), who have strong interests in network security or IoT security. If you are interested, please send me an email with your CV.
+ **Aug 17, 2020** &nbsp; I joined Microsoft Research Asia - Beijing as a researcher.

## projects

**AI + Security** (2014 - ). My Ph.D researches focused on using AI techniques (NLP) to enhance operational security in IoT domains. With the new AI technologies (LLM) emerging, I realized that there is a great potential to apply them for more broader security areas. Many of our research have been applied in real-world products.
+ LLM for Asset Discovery: leverage LLM to write rules for device discovery (w/ MS Defender EASM/MDE), 2022/12
+ LLM for Bot Detection: leverage LLM to label bot accounts accessing MS Copilot (w/ MS Copilot), 2023/05
+ LLM for OSINT Processing: leverage LLM to write production quality TI reports ([paper](https://www.microsoft.com/en-us/research/publication/cyberthreat-eval-can-large-language-models-automate-real-world-threat-research/)) (w/ MDTI and Security Copilot), 2024/07
+ LLM for Static Analysis: measure the performance of LLM for detecting real-world C/C++ UaF and Rust memmory-related vulnerabilities, specifically for benchmark and comprehensive insights, 2024/06
+ Secure Scripting Language Generation: enable lightweight LLMs to generate secure scripting language (PowerShell), 2024/11

**Future Agent System** (2023/10 - ). I envision a future where there will be two main types of systems: AI Infrastructure System and Future Agent System. AI Infrastructure System is more clear and well-defined, while Future Agent System is still in a very early stage and more open-ended. 
We are exploring this direction by **building production-level agent systems**, which are used in MS production teams to accelare their daily workflow. The key explored techniques include 
+ Agent Benchmarking: defines which tasks you want AI to solve - it is critical and challenging. It includes what's the task abstract, how to score the task, how to collect enough and representative tasks (as eval or training datasets), etc.
+ Agent Building: how to feed needed tools and conext to LLM and have a runnable agent; then, how to tune the agent prompt/code/context, or even the model to make it achieve desired performance.
+ Agent Serving and Orchestration: when many agents are welled builded, how to orchestrate them to serve 1M users and make it continue evolving, etc.

**System Intelligence** (2025/08 - ). I am also interested in using AI techniques to address challenging system problems. Current AI can now write code—but not systems. It lacks the capacity to reason about architecture, trade-offs, and timeless design principles. Enabling AI to design, implement, and maintain computing systems is a critical leap toward AI's next level of capabilities. 
We are activately pursing system intelligence. See [our project page](https://sys-intelligence.github.io/) and [our recent blog](https://www.sigops.org/2025/defining-system-intelligence/) for more details.
+ System Intelligence Benchmark: https://github.com/sys-intelligence/system-intelligence-benchmark, 2025/11
+ ...


## selected publications
+ Xiangsen Chen, Xuan Feng, Shuo Chen, Sudipto Rakshit, Diana Duvieilh, Ashley Picone, Nan Tang. _CyberThreat-Eval: Can Large Language Models Automate Real-World Threat Research?_, Transactions on Machine Learning Research, 2025
+ Yuanye Liu, Jiahang Xu, Li Lyna Zhang, Qi Chen, **Xuan Feng**, Yang Chen, Zhongxin Guo, Yuqing Yang, Peng Cheng. _Beyond Prompt Content: Enhancing LLM Performance via Content-Format Integrated Prompt Optimization_, arXiv preprint arXiv:2502.04295 
+ Zhenghao Lin, Zihao Tang, Xiao Liu, Yeyun Gong, Yi Cheng, Qi Chen, Hang Li, Ying Xin, Ziyue Yang, Kailai Yang, Yu Yan, Xiao Liang, Shuai Lu, Yiming Huang, Zheheng Luo, Lei Qu, **Xuan Feng**, Yaoxiang Wang, Yuqing Xia, Feiyang Chen, Yuting Jiang, Yasen Hu, Hao Ni, Binyang Li, Guoshuai Zhao, Jui-Hao Chiang, Zhongxin Guo, Chen Lin, Kun Kuang, Wenjie Li, Yelong Shen, Jian Jiao, Peng Cheng, Mao Yang. _Sigma: Differential Rescaling of Query, Key and Value for Efficient Language Models_, arXiv preprint arXiv:2501.13629

+ **Xuan Feng**, Xiaojing Liao, XiaoFeng Wang, Haining Wang, Qiang Li, Kai Yang, Hongsong Zhu, Limin Sun. _Understanding and Securing Device Vulnerabilities through Automated BugReport Analysis._ Proceedings of the USENIX Security Symposium 2019 (SEC'19), AUGUST 14–16, 2019, SANTA CLARA, CA, USA. (CCF-A)
+ **Xuan Feng**, Qiang Li, Haining Wang, Limin Sun. _Acquisitional Rule-based Engine for Discovering Internet-of-Thing Devices._ Proceedings of the USENIX Security Symposium 2018 (SEC'18), AUGUST 15–17, 2018, BALTIMORE, MD, USA. (CCF-A)
+ Xianghang Mi, **Xuan Feng**, Xiaojing Liao, Baojun Liu, XiaoFeng Wang, Feng Qian, Sumayah Alrwais, Limin Sun, Ying Liu. _Resident Evil: Understanding Residential IP Proxy as a Dark Service._ Proceedings of the 40th IEEE Symposium on Security and Privacy (S&P 2019). (CCF-A)
+ Nan Zhang, Xianghang Mi, **Xuan Feng**, XiaoFeng Wang, Yuan Tian, Feng Qian. _Dangerous Skills: Understanding and Mitigating Security Risks of Voice-Controlled Third-Party Functions on Virtual Personal Assistant Systems._ Proceedings of the 40th IEEE Symposium on Security and Privacy (S&P'2019). (CCF-A) **CSAW'19 Best Paper Award** (3rd Place, 3 out of 80)
+ Yi Chen, Mingming Zha, Nan Zhang, Dandan Xu, Qianqian Zhao,  **Xuan Feng**, Kan Yuan, Ya Su, Yuan Tian, Kai Chen, Xiaofeng Wang, Wei Zou. _Demystifying Hidden Privacy Settings in Mobile Apps._ Proceedings of the 40th IEEE Symposium on Security and Privacy (S&P'2019). (CCF-A)
+ Kan Yuan, Di Tang, Xiaojing Liao, XiaoFeng Wang, **Xuan Feng**, Yi Chen, Menghan Sun, Haoran Lu, Kehuan Zhang. _Stealthy Porn: Understanding Real-World Adversarial Images for Illicit Online Promotion._ Proceedings of the 40th IEEE Symposium on Security and Privacy (S&P'2019). 
+ Qiang Li, **Xuan Feng**, Zhi Li, Haining Wang, Linmin Sun. _Towards Fine-grained Fingerprinting of Firmware in Online Embedded Devices._ Proceedings of the IEEE International Conference on Computer Communications 2018 (Infocom'2018), April 15-19, 2018, Honolulu, HI, USA. (CCF-A)
+ **Xuan Feng**, Qiang Li, Haining Wang, Limin Sun. _Characterizing Industrial Control Equipments on the Internet._ IEEE International Conference on Network Protocols (ICNP'16), November 8-11, 2016, Singapore. (CCF-B)
+ Qiang Li, **Xuan Feng**, Haining Wang and Limin Sun. _Understanding the Usage of Industrial Control System Devices on the Internet._ IEEE Internet of Things Journal, vol. 5, no. 3, pp. 2178-2189, June 2018. (JCR Q1)


## statistics

<div class="stats">
Total Unique Visitors 🔙: <!-- hitwebcounter Code START -->
<a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7968650&style=0024&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></a>  
<div style="width: 30px; margin: 0 auto;"> 
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=3ICdSQOHVTlzy261jUfWIyD5i8hQ0u7c2I9QDBIDz-0"></script>
</div>
</div>


