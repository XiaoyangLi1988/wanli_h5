import React from 'react';

export default function News2({ isCn }) {
  return (
    <>
      <div className="right-title">
        <p>
          {
            isCn ?
              '雾霾带来的写字楼新趋势' :
              'The New Trends in Office Buildings Caused by Haze'
          }
        </p>
        <p>
          {
            isCn ?
              'CBD万利中心带来公园里的办公空间' :
              'The CBD WIN CENTER Introduces Office Spaces Amidst Parks'
          }
        </p>
        <p>
          {
            isCn ?
              '来源：网易新闻' :
              'Source: NetEase News'
          }
        </p>
      </div>
      <div className="right-content">
        <p>
          {
            isCn ?
              '最近几日，北京的PM2.5已连续爆表，全城已启动了第二次红色预警。戴防霾口罩、使用空气净化器成为“防霾”的必备装备。室外雾霾呛人，8小时之内坐在办公室里的白领们能够呼吸到新鲜空气自然成为一件极奢侈的事。' :
              'In recent days, Beijing\'s PM2.5 levels have continuously exceeded the scale, triggering the city\'s second red alert. Wearing anti-smog masks and using air purifiers have become essential gear for \'anti-smog\' measures. The outdoor haze is overwhelming, making the luxury of breathing fresh air during the 8 hours spent in the office a rare occurrence for white-collar workers.'
          }
        </p>
        <p>
          {
            isCn ?
              '哪里才是躲避雾霾的“安全之所”?在当下的北京，空气质量问题成为企业在京选择办公室的重要影响因素，而能够提供健康、清洁的空气成为写字楼的最重要竞争力之一。曾流行于国外的EOD(绿色生态办公区)写字楼因此成为“新宠”。即将亮相的万利中心便是以北京CBD首个EOD顶级生态办公区，引领风气之先，树立起写字楼市场的新标杆。' :
              'Where is the \'safe haven\' to escape the haze? In today\'s Beijing, air quality has become a crucial factor influencing companies in choosing office spaces. The ability to provide healthy, clean air has become one of the most significant competitive advantages for office buildings. EOD (Green Ecological Office) buildings, once popular abroad, have become the \'new darling.\' The upcoming WIN CENTER is set to be Beijing\'s first top-notch ecological office area in the CBD, leading the trend and setting a new benchmark in the office market.'
          }
        </p>
        <p>
          {
            isCn ?
              'CBD首个EOD顶级写字楼将亮相' :
              'The first top-notch EOD office building in the CBD will debut. Data shows that we spend about 76% of our waking hours in the office every day. The office, in a sense, is another \'home.\' It is not just an external environmental space but also influences the psychological space of every individual. The U.S. Green Ecological Building Institute confirms that working in a green ecological environment can not only improve employee health but also increase work efficiency by more than 10%. The increased productivity is enough to cover additional costs such as creator salaries, according to the institute.'
          }
        </p>
        <p>
          {
            isCn ?
              '数据显示，在我们每天清醒的时间里，约76%的时间是在办公室度过。办公室，某种意义上是我们另一个“家”，它不仅是一个外在的环境空间，也影响着每个人的心理空间。美国绿色生态建筑机构证实，在绿色生态环境中办公不仅可以提高员工的健康状况，还可以使工作效率提升10%以上，其增加部分的产值足以支付创造者的薪金等开销。' :
              'A survey white paper released by a commercial real estate service and investment company also shows that air quality is second only to rising rents, becoming the second-largest concern for tenants in Beijing\'s office market. 68% of surveyed office users believe that air pollution is a significant factor in \'increased employee illness leading to decreased work efficiency.\' Another survey data indicates that 97.7% of white-collar workers in Beijing\'s CBD are concerned about their office environment, making healthy offices an undeniable trend.'
          }
        </p>
        {isCn && <p>某商业地产服务与投资公司发布的调查白皮书亦显示：空气质量仅次于租金上涨，成为租户对北京办公楼市场的第二大顾虑。68%的受访写字楼用户认为，空气污染是“员工得病频率增加而造成工作效率下降”的重要诱因。另一份调查数据显示：北京CBD有97.7%的白领关心自身的办公环境问题，健康办公已成为不可忽略的大趋势。</p>}
        {isCn && <p>毋庸置疑，在“雾霾锁城”的北京，代表着绿色健康的EOD(绿色生态办公区)写字楼成为时下“新宠”。</p>}
        <img alt="" src="/src/img/news/news2/news1.jpg"/>
        <p>
          {
            isCn ?
              '在国外，很多跨国公司的总部都设在EOD生态办公区内，如世界闻名的GOOGLE、迪士尼、英特尔等。公园式的办公环境，人性化的办公模式，营造出传统CBD写字楼所无法企及的舒适、轻松。' :
              'In foreign countries, many multinational company headquarters are located in EOD ecological office areas, such as globally renowned companies like GOOGLE, Disney, Intel, and more. The park-style office environment, along with a humane office model, creates a comfort and ease that traditional CBD office buildings cannot match.'
          }
        </p>
        <p>
          {
            isCn ?
              '在国内，EOD概念近几年才流行，不过，目前国内的EOD产品多数建在远郊区，鲜有建于市中心，虽然能够实现绿色、健康、舒适的办公环境，不过，不方便的交通和没有成行的商圈，也给租户带来生活不便的“烦恼”。尤其对于北京而言，但既拥有绝佳地段、又能实现EOD的写字楼凤毛麟角。' :
              'In China, the EOD concept has only become popular in recent years. However, most EOD projects in China are constructed in suburban areas, with few in the city center. While these offices can achieve a green, healthy, and comfortable working environment, inconvenient transportation and the absence of developed business districts bring inconveniences to tenants. This is particularly true for Beijing, where office buildings that both boast an excellent location and implement the EOD concept are rare.'
          }
        </p>
        <p>
          {
            isCn ?
              '即将亮相的万利中心，以其绝佳位置的立体交通、前所未有的超值优价、绿色生态的办公环境、一应俱全的周边配套、全新打造新兴办公文化，填补了北京CBD区域写字楼市场EOD项目稀缺的空白。' :
              'The upcoming WIN CENTER, with its exceptional location offering comprehensive transportation options, unprecedented cost-effectiveness, a green ecological office environment, complete surrounding facilities, and the creation of a new and emerging office culture, fills the gap in the Beijing CBD area for scarce EOD projects.'
          }
        </p>
        {isCn && <p>外在优势+内在修为=天然大氧吧</p>}
        {isCn && <p>集万利商业公司多年之力打造的北京CBD首个EOD顶级生态写字楼——万利中心，占据了天时、地利、人和的优势。该写字楼位于依园傍水的27万平方米庆丰公园之侧，是真正的中央公园里的办公区。</p>}
        <img alt="" src="/src/img/news/news2/news2.jpg"/>
        <p>
          {
            isCn ?
              '在办公环境上，万利中心契合时代“绿色生态办公”全新理念，将EOD概念深入其中。' :
              'WIN CENTER, the first EOD top ecological office building in Beijing\'s CBD, crafted by the collective efforts of Wanli Commercial Company, leverages the advantages of favorable timing, geographical location, and the harmony of people. Positioned beside the sprawling 270,000-square-meter Qingfeng Park, it is genuinely an office area within the central park.'
          }
        </p>
        <p>
          {
            isCn ?
              '于内，营建前后双花园办公环境，项目内部绿化面积高达2万多平方米，植以大量树阵奠下生态基础;于外，27万平方米中央城市公园(庆丰公园)，营造丰富怡人感受，将原生态拉近身边;办公园区通过不同季相植物的搭配，打造三季有花、四季常青的办公环境景观，将雪松(具有极强防菌、减噪、杀菌能力)遍布整个园区，成为优质空气的天然屏障。' :
              'In the realm of office environments, WIN CENTER aligns with the contemporary concept of "green ecological offices," delving deep into the EOD (Ecology, Office, Dynamics) philosophy. Internally, it features dual garden office spaces, with over 20,000 square meters of internal greenery, forming a foundation for ecological harmony. Externally, surrounded by the 270,000-square-meter central urban park (Qingfeng Park), it provides a rich and delightful experience, bringing the original ecology closer. The office area combines different seasonal plants to create a landscape with blossoms in three seasons and evergreen views in four seasons. Cedar trees, known for their potent antibacterial, noise reduction, and sterilization capabilities, adorn the entire area, acting as a natural barrier for high-quality air.'
          }
        </p>
        <p>
          {
            isCn ?
              '时下，面对写字楼里的“雾霾天”，很多企业选择在写字楼安装新风系统。通过将室外空气导入室内，实现办公楼内的通风效果。但在专家看来，随着空气污染的加重，新风系统净化空气的功能逐渐丧失，室外污染严重空气导入室内后，不仅不会起到净化空气的作用，还会加重室内空气污染。' :
              'Amidst "hazy days" inside office buildings, many companies install fresh air systems. However, experts caution that as air pollution worsens, the purifying function of these systems diminishes. In the face of the dilemma of either opening windows and risking haze pollution or keeping them closed and compromising ventilation, WIN CENTER employs a robust ecological system capable of filtering PM2.5. By creating a solid internal and external environment, WIN CENTER effectively prevents haze from entering the office space. Users inside can enjoy the freshness of a green forest, making work more relaxed and efficient.'
          }
        </p>
        <p>
          {
            isCn ?
              '对于忙碌都市白领，大部分时间都在办公室度过。每天开窗怕雾霾污染，不开窗又怕通风不好，在这种两难的情况下，要保证办公环境的空气，就需要一种能过滤PM2.5的强大大的生态环境系统。万利中心以过硬的内外环境营造，打造出了独特的自然生态系统，实现把雾霾“扼杀”在写字楼外，用户在写字楼内也能享受到绿色大森林般的新鲜空气，工作更加轻松怡神，效率加倍。' :
              'What makes WIN CENTER even more valuable is its emphasis on a comfortable working environment and a more efficient, healthy, and eco-friendly office philosophy compared to the constraints and busyness of traditional offices. Deeply understanding the spirit of EOD, WIN CENTER not only invests in green office environments but also humanizes the setting with amenities like lounges, gyms, and cafes. Breaking away from the traditional 8-hour model, innovative property management and support cater to personalized needs, with independent zone controls for fresh air systems and air conditioning, ensuring 24-hour security and a more abundant and flexible property management approach. Many industry experts see the rising public concern for air quality and environmental issues, positioning green office buildings like WIN CENTER as a differentiating point in future office spaces. Green and healthy office buildings are expected to become an irreversible industry trend.'
          }
        </p>
        {isCn && <p>更为难能可贵的是，相比传统写字楼8小时的约束与繁忙，万利中心EOD生态办公更突出舒适的办公环境和更高效、健康、环保的办公理念。万利深度理解EOD精神所在，不仅在绿色办公环境上下足功夫，更加人性化设置休息室、健身房、咖啡馆等周边设施，让办公再无限制和约束，充分配合企业生态办公的理念与精神。在物业管理与配套支持上也创新性打破8小时制。新风系统、冷暖空调，均采用独立分区控制，24小时的保障性供应，以更为充裕和自由的物业管理方式满足企业个性化需求。</p>}
        {isCn && <p>在多位业内人士看来，随着人们对空气质量和环境问题的关注，如万利中心这样的绿色写字楼有望成为未来写字楼的差异化卖点，绿色健康写字楼将成为不可逆转的行业趋势。</p>}
      </div>
    </>
  )
}
