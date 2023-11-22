import React from 'react';

export default function News6({ isCn }) {
  return (
    <>
      <div className="right-title">
        <p>{isCn ? '服务为上，细节决定品质' : 'Service First, Details Determine Quality'}</p>
        <p>{isCn ? '万利中心2018年度中央空调清洗及保养情况报告' : 'Annual Report on Cleaning and Maintenance of Central Air Conditioning at WIN CENTER for the Year 2018'}</p>
        <p>{isCn ? '万利中心' : 'WIN CENTER'}</p>
      </div>
      <div className="right-content">
        {
          isCn &&
            <>
              <p>细节决定品质，将服务落到实处。</p>
              <p>随着天气转热，大厦即将迎来中央空调冷气开放。为了更好的保障所有入驻企业能够有一个更加健康、安全的办公环境，万利中心于2018年4月28日完成了本年度的中央空调清洗及保养工作。</p>
              <p>众所周知，由于空调房间相对封闭，室内的温度和湿度很适合致病性微生物尤其是真菌的生长和繁殖。中央空调风管一般在使用1-2年后就需要进行清洗，重点是除积尘，以及除去一些附在管壁、灰尘上的各种细菌。大厦中央空调的清洗工作需要由专业团队进行且费用昂贵，并非所有的办公写字楼均能够按标准进行。</p>
              <p>万利中心深度倡导EOD生态办公理念，于外斥巨资打造30000余平米景观园林，于内则是深耕细作，将环境健康、安全放在首位。</p>
              <p>2018年3月27日至2018年4月27日历经31天，我司将万利中心大厦中央空调系统及其附属设备进行了清洗及保养工作，目前项目已竣工。</p>
              <p>下面将竣工情况上报：</p>
              <p>一、 中央空调主机、新风机组及吊顶机组清洗</p>
              <p>1、将中央空调主机冷凝器翅片采用清水清洗；配比浓度为5%-10%的碱性翅片清洗剂，用压力喷枪喷洒在机组盘管组件的铝翅片上，待翅片内部的灰尘和污垢与清洗剂充分反应清出后，再用大量清水喷洒铝翅片，将药液及污垢完全冲洗干净，观察盘管组件翅片表面已清洗干净无污垢属合格。</p>
              <p>2、 打开机组的检修门，拆下新风机组中空气滤清箱过滤器的过滤网，如过滤网为金属材质，则采用清水加碱性洗涤剂清洗干净；如过滤网为棉布材质，则采用吸尘器进行灰尘清理。</p>
              <p>3、将配比浓度为5%-10%的碱性翅片清洗剂，用压力喷枪喷洒在机组盘管组件的铝翅片上，待翅片内部的灰尘和污垢与清洗剂充分反应清出后，再用大量清水喷洒铝翅片，将药液及污垢完全冲洗干净，观察盘管组件翅片表面已清洗干净无污垢属合格。</p>
              <p>4、清洗机组冷凝排水槽内的污垢，主要采用湿布加清洁剂将排水槽擦拭干净，并在排水槽内加一片杀菌灭藻片，最后试冷凝水下水管通是否通畅，防止堵塞溢水。</p>
              <p>5、采用吸尘器、清扫刷将风机叶轮表面和蜗壳内部的尘土清扫干净。</p>
              <p>6、采用吸尘器、清扫刷、湿抹布将机组去加湿器表面的污物清理干净，最后对去加湿器表面喷撒适量消毒剂。</p>
              <p>7、清洗机组内外表面，关闭机组的检修门。</p>
              <p>二、风机盘管清洗工艺（机组结构为吊顶回风）</p>
              <p>1、拆下风机盘管表面的护板，并拔下电源。</p>
              <p>2、用改锥卸下风机盘管的后盖板及涡轮风机。</p>
              <p>3、将配比浓度为5%-10%的碱性翅片清洗剂，用压力喷枪喷洒在机组盘管组件的铝翅片上，待翅片内部的灰尘和污垢与清洗剂充分反应清出后，再用大量清水喷洒铝翅片，将药液及污垢完全冲洗干净，观察盘管组件翅片表面已清洗干净无污垢属合格。</p>
              <p>4、清洗机组冷凝排水槽内的污垢，主要采用湿布加清洁剂将排水槽擦拭干净，并在排水槽内加一片杀菌灭藻片，最后试冷凝水下水管通是否通畅，防止堵塞溢水。</p>
              <p>5、采用吸尘器、清扫刷将风机叶轮表面和蜗壳内部的尘土清扫干净。</p>
              <p>6、拆下风机盘管中空气过滤器上的金属过滤网，采用清水加碱性洗涤剂清洗干净，晾干后重新装回。</p>
              <p>7、将风机盘管复原、接电试运转，检验合格，粘标签。</p>
              <p>三、其他附属设备保养</p>
              <p>（一）、水泵维保</p>
              <p>冷冻水泵、冷却水泵检修包括，检查水泵轴承、机械密封、空开、接触器、电压、电流、叶轮、电机绝缘、单向阀门、加注润滑油。</p>
              <p>1、控开：检查控开通断是否正常，触点有无损坏及电弧烧损。2、接触器：检查通断器通断是否正常，触电有无损坏及电弧烧伤。3、过载保护：检查过载保护器。4、电机：测量电机绝缘、电压、电流是否在正常值。5、机械密封：检查机械密封是否有滴、漏、跑等现象。6、水泵轴承：检查轴承磨损程度，是否需要更换。7、叶轮：检查叶轮是否有损坏现象。8、单向阀门：检查单向阀门是否完好有效。9、压力表：检查各压力表、温度计准确无误。10、加注润滑油：为电机加注润滑油。11、软连接：软连接完好无滴水现象。12、水管：水管保温无开裂现象。</p>
              <p>（二）、除污器清洗</p>
              <p>1、打开除污器，取出过滤网清洗污垢。</p>
              <p>2、如有损坏的过滤网，更换过滤网。</p>
              <p>（三）、屋顶及水泵间配电室清扫</p>
              <p>1、将配电柜停电、验电及放电后并采取安全措施方可进行清扫工作。2、将配电柜的灰尘用专用毛刷及吹尘器清扫。3、检查各控开：检查控开通断是否正常，触点有无损坏及电弧烧损和螺栓紧固。4、过载保护：检查过载保护器。5、检查CT、PT接线及螺丝紧固。6、检查各接触点有无过热现象。7、检查及检测绝缘。</p>
              <p>（四）、屋顶检修平台和设备基础保养刷漆</p>
              <p>1、将检修平台和设备基础的锈蚀除锈。</p>
              <p>2、喷涂结构专用防锈漆二遍。</p>
              <p>（五）、屋顶阀门检修、除锈喷漆</p>
              <p>1、将阀门检修后的锈蚀除锈。</p>
              <p>2、喷涂专用防锈漆二遍。</p>
              <p>（六）、将禅房、物业办公室、监控室、总配电室、门卫、招商办公室等区域，多联机式空调、壁挂式空调、风机盘管及户外机清洗保养。</p>
            </>
        }
        {
          !isCn &&
            <>
              <p>Details Determine Quality, Implementing Service in Practice.</p>
              <p>As the weather turns hot, the building is about to usher in the opening of central air conditioning. To better ensure that all resident businesses can have a healthier and safer working environment, WIN CENTER completed the central air conditioning cleaning and maintenance work for the year on April 28, 2018.</p>
              <p>As is well known, due to the relatively enclosed nature of air-conditioned rooms, the indoor temperature and humidity are conducive to the growth and reproduction of pathogenic microorganisms, especially fungi. The air ducts of central air conditioning generally need to be cleaned after 1-2 years of use, focusing on removing dust and various bacteria attached to the duct walls and dust. The cleaning of the central air conditioning in the building requires a professional team and is costly; not all office buildings can be carried out according to standards.</p>
              <p>WIN CENTER deeply advocates the EOD ecological office concept, investing heavily in creating more than 30,000 square meters of landscape gardens externally, while internally focusing on meticulous work, prioritizing environmental health and safety.</p>
              <p>From March 27, 2018, to April 27, 2018, spanning 31 days, our company carried out the cleaning and maintenance of the central air conditioning system and its ancillary equipment in WIN CENTER building. The project is currently completed.</p>
              <p>Reporting Completion Status</p>
              <p>Ⅰ、Central Air Conditioner Main Unit, Fresh Air Unit, and Ceiling Unit Cleaning</p>
              <p>Clean the condenser fins of the central air conditioner main unit with water. Use an alkaline fin cleaning agent with a concentration of 5%-10%. Spray it on the aluminum fins of the coil components with a pressure gun. After the dust and dirt inside the fins have reacted sufficiently with the cleaning agent and are cleared, rinse the aluminum fins thoroughly with plenty of water. Observe that the surface of the coil components' fins is clean and free of dirt, qualifying as acceptable.</p>
              <p>Open the maintenance door of the unit. Remove the filter screen of the air filter box of the fresh air unit. If the filter screen is made of metal, clean it with water and alkaline detergent. If the filter screen is made of cotton, use a vacuum cleaner for dust cleaning.</p>
              <p>Clean the dirt inside the unit's condensate drain trough. Use a wet cloth with a cleaning agent to wipe the drain trough clean. Place a piece of bactericidal and algaecidal tablet in the drain trough. Finally, check whether the condensate water drainage pipe is unblocked to prevent overflow blockage.</p>
              <p>Use a vacuum cleaner and cleaning brush to clean the surface of the fan impeller and the dust inside the snail shell.</p>
              <p>Use a vacuum cleaner, cleaning brush, and damp cloth to clean the dirt on the surface of the humidifier. Finally, spray an appropriate amount of disinfectant on the surface of the humidifier.</p>
              <p>Clean the inside and outside surfaces of the unit. Close the maintenance door of the unit.</p>
              <p>Ⅱ、Cleaning Process for Fan Coil Unit (Unit Structure: Ceiling Return Air)</p>
              <p>Remove the protective panel on the surface of the fan coil unit and disconnect the power.</p>
              <p>Use a screwdriver to remove the back cover and turbine fan of the fan coil unit.</p>
              <p>Spray alkaline fin cleaning agent with a concentration of 5%-10% on the aluminum fins of the coil components using a pressure spray gun. After the dust and dirt inside the fins have reacted adequately with the cleaning agent, rinse the aluminum fins thoroughly with a large amount of water. Observe that the surface of the coil components' fins is clean and free of dirt, qualifying as acceptable.</p>
              <p>Clean the dirt inside the unit's condensate drain trough. Use a wet cloth with a cleaning agent to wipe the drain trough clean. Place a piece of bactericidal and algaecidal tablet in the drain trough. Finally, check whether the condensate water drainage pipe is unblocked to prevent overflow blockage.</p>
              <p>Use a vacuum cleaner and cleaning brush to clean the surface of the fan impeller and the dust inside the snail shell.</p>
              <p>Remove the metal filter screen on the air filter of the fan coil unit. Clean it with water and alkaline detergent, air-dry it, and then reinstall it.</p>
              <p>Restore the fan coil unit, reconnect the power, perform a trial run, inspect for qualification, and affix a label.</p>
              <p>Ⅲ、Maintenance of Other Auxiliary Equipment</p>
              <p>3.1、Maintenance of Water Pumps</p>
              <p>The overhaul of chilled water pumps and cooling water pumps includes checking pump bearings, mechanical seals, circuit breakers, contactors, voltage, current, impellers, motor insulation, check valves, and lubrication oil filling.</p>
              <p>3.1.1、Circuit Breakers: Check if the circuit breaker's on-off operation is normal, and inspect for damaged contacts or arc burns.3.1.2、Contactors: Examine the on-off operation of the contactor, and check for damage and arc burns.3.1.3、Overload Protection: Inspect the overload protection device.3.1.4、Motor: Measure motor insulation, voltage, and current to ensure they are within normal values.3.1.5、Mechanical Seals: Check for any dripping, leaking, or running of the mechanical seals.3.1.6、Pump Bearings: Inspect the degree of wear on the bearings and determine if replacement is necessary.3.1.7、Impellers: Examine the impellers for any signs of damage.3.1.8、Check Valves: Verify the integrity and effectiveness of the check valves.3.1.9、Pressure Gauges: Ensure the accuracy of all pressure gauges and thermometers.3.1.10、Lubrication Oil Filling: Add lubrication oil to the motor.3.1.11、Flexible Couplings: Ensure that flexible couplings are intact and free from water leakage.3.1.12、Pipes: Check the insulation of pipes for any cracks.</p>
              <p>3.2、Purifier Cleaning</p>
              <p>3.2.1、Open the purifier and remove the filter for cleaning dirt.3、2.2、If the filter is damaged, replace it.3.3、Roof and Pump Room Electrical Room Cleaning.3.3.1、Power off the distribution cabinet, perform voltage verification, and discharge before taking safety measures for cleaning.3.3.2、Use a specialized brush and dust blower to clean the dust in the distribution cabinet.3.3.3、Check each circuit breaker: Ensure normal operation, inspect for damaged contacts, arc burns, and bolt fastening.3.3.4、Overload protection: Examine the overload protection device.3.3.5、Inspect CT (Current Transformer), PT (Potential Transformer) wiring, and screw fastening.3.3.6、Check for overheating at various contact points.3.3.7、Inspect and test insulation.</p>
              <p>3.3、Roof Inspection Platform and Equipment Foundation Maintenance Painting</p>
              <p>3.3.1、Remove rust from the inspection platform and equipment foundation.3.3.2、Spray two coats of specialized anti-rust paint.</p>
              <p>3.4、Roof Valve Inspection, Rust Removal, and Painting</p>
              <p>3.4.1、Remove rust from valves after inspection.3.4.2、Spray two coats of specialized anti-rust paint.</p>
              <p>3.5、Clean and Maintain Multiple Air Conditioning Units</p>
              <p>3.5.1、In areas such as meditation rooms, property offices, control rooms, main distribution rooms, guard rooms, and business offices:</p>
              <p>3.6、Clean and maintain multi-split air conditioners, wall-mounted air conditioners, fan coil units, and outdoor units.</p>
            </>
        }
      </div>
    </>
  )
}
