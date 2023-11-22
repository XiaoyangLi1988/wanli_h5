import React from 'react';

export default function News4({ isCn }) {
  return (
    <>
      <div className="right-title">
        <p>{isCn ? '再造桃花源' : 'Recreating the Peach Blossom Spring'}</p>
        <p>{isCn ? '万利中心一座公园里的办公区' : 'WIN CENTER an office area within a park' }</p>
        <p>{isCn ? '万利中心' : 'WIN CENTER'}</p>
      </div>
      <div className="right-content">
        <p>
          {
            isCn ?
              '揽喧嚣而宁静， 将世界级商务融于桃花源中。' :
              'Embracing the hustle and bustle while maintaining tranquility, integrating world-class commerce into the Peach Blossom Spring.Harmonizing grandeur with subtlety, both inside and out, creating a top-tier EOD (Executive Office of the Day) ecological workspace.This is an authentic portrayal of WIN CENTER, truly an office area within a park.'
          }
        </p>
        <p>
          {
            isCn ?
              '集大成而内敛， 内外兼修，打造顶级EOD生态办公。' :
              'As the grass grows, and birds take flight, everything awakens. In the vibrant month of March, WIN CENTER is full of vitality. The "Cultivate a Thousand Trees, Create a Ten Thousand Meter Landscape Garden" plan is in full swing.'
          }
        </p>
        <p>
          {
            isCn ?
              '这便是万利中心的真实写照， 一座名副其实的公园里的办公区。' :
              'With WIN CENTER North Square as the core, connecting to Qingfeng Park in the west, bordering the Hui River in the east, lush and vibrant, a riot of colors.From pine trees, ancient magnolias, cherry blossoms, North American crabapples, to maple trees, wisteria, lilacs, and peach blossoms, each standing tall and verdant or charmingly diverse, they encircle WIN CENTER, vast and serene.Investing millions to create three major ecological landscapes at WIN CENTER.'
          }
        </p>
        <p>
          {
            isCn ?
              '草长莺飞，万物醒。阳春三月的万利中心一派生机勃勃。“育千棵树，造万米景观园林”计划正在如火如荼的进行中。' :
              'Ancient magnolias line the walkways, blossoms unfolding like a delicate canopy. In the central square, 12 ancient magnolia trees stand in rows on either side of the paths, pure, proud, and graceful, their flowers forming a cover.'
          }
        </p>
        <p>
          {
            isCn ?
              '以万利中心北广场为中心，西连庆丰公园，东壤通惠河畔，郁郁葱葱，姹紫嫣红。' :
              '"As the evening makeup falls in colorful layers, bound in simple elegance, the jade palace of spring emerges. Touched by the rosy glow of dawn, the clear dew becomes fragrant dust."'
          }
        </p>
        <p>
          {
            isCn ?
              '雪松、古玉兰、樱花、北美海棠、五角枫，紫藤、丁香和碧桃，或挺拔凝翠，或千娇百媚，将万利中心环绕其中，辽阔而宁静。' :
              'Every year at the beginning, amid the lingering chill of early spring, they proudly adorn their branches, filling the air with a pervasive fragrance, stirring a lively scene.'
          }
        </p>
        {isCn && <p>斥千万巨资打造万利中心三大生态美景。</p>}
        {isCn && <p>行道古玉兰，花开如盖。 中心广场，12棵古玉兰树纵列行道两旁，洁傲温婉，花开如盖。</p>}
        {isCn && <p>“霓裳片片晚妆新，束素亭亭玉殿春。  已向丹霞生浅晕，故将清露作芳尘。”</p>}
        {isCn && <p>每年初，春寒料峭中，便傲然枝头，香气四溢，挑动起一派生机。</p>}
        <img alt="" src="/src/img/news/news4/news1.jpg"/>
        <p>
          {
            isCn ?
              '樱花大道，如云似雪。' :
              'Cherry Blossom Avenue, like clouds and snow.'
          }
        </p>
        <p>
          {
            isCn ?
              '万利中心正门行车道以百棵樱花打造樱花大道，每年4、5月间，置身其中，足不出户便可感受“花如樱美，人若武士威”的浪漫情怀。' :
              'The main entrance driveway of WIN CENTER is adorned with a hundred cherry blossoms, creating Cherry Blossom Avenue. In the months of April and May each year, immersing oneself in it allows experiencing the romantic sentiment of "flowers as beautiful as cherry blossoms, and people as dignified as warriors" without stepping outside.'
          }
        </p>
        <p>
          {
            isCn ?
              '或居高远眺，或行于树下，便是再美好不过了。' :
              'Whether admiring from a high vantage point or strolling beneath the trees, it is nothing short of exquisite beauty.'
          }
        </p>
        <img alt="" src="/src/img/news/news4/news2.jpg"/>
        <p>
          {
            isCn ?
              '北美海棠，紫丁香，千娇百媚' :
              'North American Crabapple, Purple Lilac, Myriad Charms.'
          }
        </p>
        <p>
          {
            isCn ?
              '万利中心园区遍值青松翠竹，松竹掩映间便是一棵棵北美海棠，一丛丛进口丁香，苍翠掩映，姹紫嫣红，步入其间，如置画境。' :
              'WIN CENTER\'s garden is adorned with green pines and emerald bamboos. Amidst the pine and bamboo concealment, one finds clusters of North American Crabapples and clumps of imported Lilacs. Draped in lush greenery, the blossoms showcase various shades of purple, creating a picturesque scene as if stepping into a painting.'
          }
        </p>
        <img alt="" src="/src/img/news/news4/news3.jpg"/>
        <img alt="" src="/src/img/news/news4/news4.jpg"/>
        <p>
          {
            isCn ?
              '整个万利园区目前共有景观绿植2000余棵，其中大型及珍贵型树种千余棵，不仅仅打造出中央商务区难得一见，甚至是独一无二至美园景，更是用心良苦的为每一位步入万利中心的客人改善和打造了一个良好的生态环境。' :
              'The entire WIN CENTER campus currently boasts over 2,000 ornamental plants, including over a thousand large and rare tree species. It not only creates a rarely seen spectacle in the central business district but also a uniquely beautiful garden landscape. This meticulous effort is not only dedicated to crafting a pleasant ecological environment but also to enhance and create a favorable ecological setting for every guest entering WIN CENTER.'
          }
        </p>
        <p>
          {
            isCn ?
              '古有东晋渔人误入桃花源中，今有万利中心于喧嚣的世界商务核心打造一座苍翠掩映下的EOD生态园林办公。都是创不可为可能，均是可遇而不可求的珍贵所在。' :
              'Just as in ancient times when a fisherman from the Eastern Jin Dynasty accidentally entered the Peach Blossom Spring, today, WIN CENTER, amidst the bustling core of global business, constructs an Ecological Office and Garden shrouded in lush greenery. Both endeavors represent turning the impossible into possible, embodying precious aspects that one encounters but cannot demand.'
          }
        </p>
        <p>
          {
            isCn ?
              '依天时，背靠27万平方米庆丰公园，拥有独一无二的外部环境；着地利，地处世界级商务核心，与北京电视台、国贸中心、银泰等地标性建筑仅一河之隔，交通便利，四通八达；创人和，万利中心秉承做事先做人的原则，脚踏实地，严于律已，不仅在外部斥巨资打造千万级生态园林景观，更是于细节处将生态、健康、安全立于首要地位。' :
              'Aligned with the seasons, WIN CENTER stands against the backdrop of the 270,000-square-meter Qingfeng Park, offering a unique external environment. Its strategic location places it in the heart of the world-class business hub, just across the river from landmark structures like Beijing TV Station, China World Trade CENTER, and Yintai. This ensures convenient and well-connected transportation. Upholding the principle of being conscientious in both actions and character, WIN CENTER not only invests significantly in creating a multimillion-dollar ecological garden landscape externally but also prioritizes ecology, health, and safety down to the finest details.'
          }
        </p>
        <p>
          {
            isCn ?
              '除新风系统外，还在整个空气循环系统中特别添加PM2.5拦截与过滤功能，以确保办公区内循环空气达到国际优质标准，以实实在在的行动保障每一位入驻万利中心的租户身体健康不受有害空气的侵害。' :
              'In addition to the fresh air system, a PM2.5 interception and filtration function has been specifically incorporated into the entire air circulation system. This ensures that the circulating air in the office area meets international quality standards, taking concrete actions to safeguard the health of every tenant entering WIN CENTER, shielding them from the harm of harmful air.'
          }
        </p>
        <p>
          {
            isCn ?
              '内外兼修，持之以恒，不断前行中的万利中心，必将以更加令人惊喜的面貌恭迎八方来客。' :
              'With a harmonious blend of internal and external efforts, persisting with dedication, WIN CENTER, in its continuous progress, is bound to welcome visitors from all directions with an even more surprising appearance.'
          }
        </p>
        <p>
          {
            isCn ?
              '珍稀即价值，珍贵于坚持，万利中心，一座公园里的办公区。' :
              'Rareness equates to value, and preciousness lies in persistence. WIN CENTER stands as an office area within a park, embodying both rarity and value.'
          }
        </p>
      </div>
    </>
  )
}
