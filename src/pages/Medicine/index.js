import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './index.less';

function Medicine() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/medicine/medicinenav.jpg"/>
      <div className="medicine-content-wrapper">
        <img alt="" src="/src/img/medicine/About.png" className="common-title-icon" />
        <p className="common-title-text">{i18n.language === 'zh' ? '北京万有引利科技有限公司' : ''}</p>
        <span className="common-title-bar" />
        <div className="medicine-content">
          <section>
            <p>
              {
                i18n.language === 'zh' ?
                  '北京万有引利科技有限公司是一家位于全球生物科技发展前沿的生物医药公司，专注于研究、开发、生产和销售创新的生物医药产品。自成立以来，我们始终致力于通过先进的生物科技为全球患者带来更有效、更安全的治疗方案，特别是在肿瘤学、免疫学和遗传性疾病等领域。' :
                  'Beijing Wanyou Yinli Technology Co., Ltd. is a global biopharmaceutical company situated at the forefront of biotechnology development. Specializing in the research, development, production, and sale of innovative biopharmaceutical products, we have been committed since our inception to bringing more effective and safer treatment solutions to global patients, particularly in the fields of oncology, immunology, and genetic diseases.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '公司拥有一支由生物学、药学、临床医学等多学科背景的专家组成的研发团队，他们具有丰富的实验设计和药物开发经验。依托强大的研发实力，我们已成功开发出多种生物医药创新产品，其中包括多个获得国际认可的生物药物。同时，我们还与全球多家知名生物医药研究机构和大学建立了战略合作关系，共同推进生物医药的研究和应用。' :
                  'The company boasts a research and development team composed of experts from diverse disciplines such as biology, pharmacy, clinical medicine, etc. With rich experience in experimental design and drug development, this team leverages robust research and development capabilities. We have successfully developed a variety of innovative biopharmaceutical products, including several internationally recognized biologics. Additionally, we have established strategic partnerships with renowned global biopharmaceutical research institutions and universities, jointly advancing the research and application of biopharmaceuticals.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '北京万有引利科技有限公司高度重视产品质量和患者安全。我们的生产基地严格按照国际GMP标准建设，确保从原料采购到成品生产的每个环节都符合最高质量标准。此外，我们还建立了完善的药物不良反应监测系统，确保产品上市后的安全性评估和风险管理。' :
                  'Beijing Wanyou Yinli Technology Co., Ltd. places a high emphasis on product quality and patient safety. Our production base strictly adheres to international GMP standards, ensuring that every step from raw material procurement to finished product production meets the highest quality standards. Furthermore, we have implemented a comprehensive adverse drug reaction monitoring system to ensure safety assessments and risk management after product launch.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '在企业文化方面，我们倡导以患者为中心，以科学为导向的价值观，强调团队合作和持续学习。我们相信，只有不断追求卓越和创新，才能在全球生物医药市场中保持领先地位，并为患者带来希望。公司持续投身于更广泛的疾病治疗领域，扩大研发投入，加快国际市场拓展步伐，致力于让更多患者受益于生物科技的最新成果。我们坚信，通过我们的努力和承诺，生命的未来将更加美好。' :
                  ''
              }
            </p>
          </section>
          <img alt="" src="/src/img/medicine/medicine01.png" className=""/>
        </div>
      </div>
    </div>
  )
}

export default Medicine;
