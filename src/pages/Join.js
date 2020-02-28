import React, { useEffect } from 'react'
import styles from './Join.module.less'

export default function Join() {
  useEffect(() => {
    window.scrollTo({
      behavior: 'auto',
      top: 0,
    })
  }, [])
  return (
    <div className={styles.join}>
      <Cover />
      <Hire />
    </div>
  )
}

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h1 className={styles.text}>
            阿里妈妈营销研究和
            <br />
            用户体验中心
          </h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.desc}>
          <div className={styles.quoteStart}>“</div>
          <div className={styles.text}>
            阿里妈妈MUX是负责阿里巴巴集团商业产品的营销研究及用户体验设计、前端开发团队。我们的愿景是以商业洞察、用户体验赋能商家，为其提供高效、人性化、智能化、跨平台的用户体验，让商家营销过程快速简单、效果优质显著。
          </div>
          <div className={styles.quoteEnd}>”</div>
        </div>
      </div>
    </div>
  )
}

function Hire() {
  return (
    <div className={styles.hire}>
      <div className={styles.job}>
        <div className={styles.catTitle}>产品体验设计</div>
        <div className={styles.jobTitle}>高级体验设计师</div>
        <div className={styles.desc}>
          工作地点：北京/杭州
          <br />
          <br />
          岗位描述：
          <br />
          <br />
          1、负责无线相关产品的交互设计；
          <br />
          2、根据产品需求，能分析出用户的核心需求，并完成信息架构、设计流程及原型；
          <br />
          3、熟悉用户需求分析方法，掌握可用性相关知识，能对产品进行可用性测试和分析，并提出改进方案；
          <br />
          4、负责对交互设计规范的维护和更新，推动规范的有效执行；
          <br />
          5、参与无线产品的规划构思，提出产品的核心设计原则，指导设计；
          <br />
          6、发起无线产品的界面设计流程的优化。
          <br />
          <br />
          岗位要求：
          <br />
          <br />
          1、有1年以上的无线或相关行业的交互设计经验，并有成功案例；
          <br />
          2、熟悉无线领域的发展及多个无线平台的交互特性，并能对无线交互有独特见解；
          <br />
          3、人机工程、心理学、工业设计、计算机等相关专业，本科以上学历；
          <br />
          4、优秀的沟通能力，逻辑思维及分析能力强，并有较强的写作能力；
          <br />
          5、跨团队协作，能推动用户体验的改进；
          <br />
          6、追踪当前UED的发展走向，熟悉UED的业内发展动态，关注最新的无线经典设计。
          <br />
        </div>
        <a href="mailto:yi.kangy@alibaba-inc.com?subject=[您的名字][工作地点]体验设计师简历" className={styles.btn}>
          投递简历
        </a>
      </div>
      <div className={styles.job}>
        <div className={styles.catTitle}>前端开发</div>
        <div className={styles.jobTitle}>高级前端工程师</div>
        <div className={styles.desc}>
          工作地点：北京/杭州
          <br />
          <br />
          岗位描述：
          <br />
          <br />
          1、 广告投放系统、管理系统、创意制作工具和营销导购产品的前端和基于 Node 的 Server
          端功能设计、开发和实现；
          <br />
          2、广告 PC 端和无线端各产品线易用性改进和技术优化；
          <br />
          3、研究和探索创新的开发思路和前端技术，为生产实践带来帮助；
          <br />
          <br />
          岗位要求：
          <br />
          <br />
          1、 熟练运用 JavaScript / HTML / CSS,能够在脱离各前端类库后进行跨浏览器开发； <br />
          2、具备丰富的 PC 端或无线端富应用开发经验，并有商业实战案例；
          <br />
          3、有基于 Node 的 Sever 端研发经验，或至少熟悉一门非Web前端脚本的语言（如: Java / PHP /
          C++）；
          <br />
          4、对前端技术有持续的热情,个性乐观开朗,逻辑性强,善于和各种背景的人合作；
          <br />
          5、有 HTML5 或无线端 Hybrid 相关开发经验者优先；
          <br />
          6、计算机、数学、自动化等相关专业本科以上学历优先；
          <br />
        </div>
        <a href="mailto:chibing.fy@alibaba-inc.com?subject=[您的名字][工作地点]前端工程师简历" className={styles.btn}>
          投递简历
        </a>
      </div>
    </div>
  )
}
