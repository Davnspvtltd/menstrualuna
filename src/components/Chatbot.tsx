// src/components/Chatbot.tsx
import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I can help you with tracking your period cycle. Ask me anything!" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages([...messages, { sender: "user", text: userInput }]);

    const response = getBotResponse(userInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: response },
    ]);

    setUserInput("");
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();

    // Custom responses for period-related questions
    if (lowerInput.includes("cycle") || lowerInput.includes("period")) {
      return "Your period cycle is an essential part of your health. Let me know if you need details about phases or symptoms.";
    }
    if (lowerInput.includes("ovulation")) {
      return "Ovulation usually happens around the middle of your cycle. Feel free to ask for more details!";
    }
    if (lowerInput.includes("bloating")) {
      return "Bloating during your period can be caused by hormonal changes, water retention, or changes in digestion. Reducing salty foods, drinking water, and exercising can help.";
    }
    if (lowerInput.includes("miss a period")) {
      return "Missing a period can be caused by several factors like stress, diet changes, or hormonal imbalances. If you're concerned, it's a good idea to take a pregnancy test or visit a healthcare provider.";
    }
    if (lowerInput.includes("luteal phase")) {
      return "The luteal phase comes after ovulation and before your next period. It's the time when the body prepares for a possible pregnancy. If pregnancy doesn’t occur, this phase ends with menstruation.";
    }
    if (lowerInput.includes("mood swings")) {
      return "Mood swings before your period are usually caused by hormonal fluctuations, particularly changes in progesterone and estrogen levels, which affect brain chemistry.";
    }
    if (lowerInput.includes("exercise cramps")) {
      return "Yes! Regular light exercise can increase endorphin levels, which help reduce pain and improve mood during your period. Activities like yoga, walking, and swimming are great options.";
    }
    if (lowerInput.includes("ovulation signs")) {
      return "Signs of ovulation include a change in cervical mucus, mild pelvic pain, and a slight increase in basal body temperature.";
    }
    if (lowerInput.includes("spotting")) {
      return "Spotting between periods can occur due to hormonal fluctuations, stress, or changes in contraception. However, if it’s persistent or accompanied by other symptoms, it’s best to consult a doctor.";
    }
    if (lowerInput.includes("stress delay period")) {
      return "Yes, stress can delay your period or cause it to be irregular. Stress affects the hypothalamus, which controls hormones related to menstruation.";
    }
    if (lowerInput.includes("pregnancy signs")) {
      return "Some early signs of pregnancy include fatigue, nausea, sore breasts, and frequent urination. However, these symptoms can also resemble PMS, so a test is the best way to confirm.";
    }
    if (lowerInput.includes("missed period")) {
      return "If your period is late, you can take a pregnancy test to check for pregnancy. If you’re not pregnant, stress, diet, or changes in routine could be factors. If it's frequently late, consult a healthcare provider.";
    }
    if (lowerInput.includes("how to track ovulation")) {
      return "Tracking ovulation can be done by monitoring your basal body temperature, checking cervical mucus, or using ovulation predictor kits. It's helpful for understanding your fertility window.";
    }
    if (lowerInput.includes("cervical mucus ovulation")) {
      return "During ovulation, cervical mucus becomes clear, slippery, and stretchy—similar to raw egg whites. This helps sperm travel through the cervix to meet the egg.";
    }
    if (lowerInput.includes("period length")) {
      return "A normal period typically lasts between 3 to 7 days. If your period is unusually long or short, it might be a good idea to talk to your doctor.";
    }
    if (lowerInput.includes("how to balance hormones")) {
      return "Maintaining a balanced diet, regular exercise, enough sleep, and managing stress can help keep your hormones in balance. For more severe issues, it’s best to consult a healthcare professional.";
    }
    if (lowerInput.includes("hormonal birth control period")) {
      return "Hormonal birth control can change your period, making it lighter, more regular, or even stopping it altogether, depending on the type of birth control you use.";
    }
    if (lowerInput.includes("period delay")) {
      return "Period delay can be caused by stress, diet changes, or travel. It’s also a sign of hormonal imbalance or a pregnancy. You can track your cycle to check for irregularities.";
    }
    if (lowerInput.includes("how much blood lost period")) {
      return "On average, a person loses about 30-40 milliliters of blood during a period. This amount can vary from person to person, but it's usually not enough to cause concern.";
    }
    if (lowerInput.includes("birth control impact period")) {
        return "Yes, hormonal birth control can alter your period. It may make your periods lighter, shorter, or even stop them altogether, depending on the method used.";
      }
      
      if (lowerInput.includes("stress impact period")) {
        return "Stress can significantly affect your period. It can delay your period, make it lighter or heavier, and may even cause missed periods due to its impact on hormone levels.";
      }
      
      if (lowerInput.includes("how to reduce period cramps")) {
        return "To reduce period cramps, you can try using a heating pad, taking pain relievers like ibuprofen, doing gentle exercise, and eating anti-inflammatory foods like ginger or turmeric.";
      }
      
      if (lowerInput.includes("why period late")) {
        return "A late period can be caused by stress, weight changes, illness, hormonal imbalances, or pregnancy. If it's not pregnancy, consider tracking your cycle to identify patterns or consult a healthcare provider.";
      }
      
      if (lowerInput.includes("irregular periods reasons")) {
        return "Irregular periods can be caused by various factors, including stress, excessive exercise, hormonal imbalances, thyroid problems, polycystic ovary syndrome (PCOS), or changes in contraception.";
      }
      
      if (lowerInput.includes("can pregnancy delay period")) {
        return "Yes, pregnancy can delay your period. If you miss your period and have had unprotected sex, you may want to take a pregnancy test to confirm.";
      }
      
      if (lowerInput.includes("heavy periods causes")) {
        return "Heavy periods, or menorrhagia, can be caused by hormonal imbalances, uterine fibroids, polyps, endometriosis, or blood clotting disorders. If periods are unusually heavy, it's important to consult a doctor.";
      }
      
      if (lowerInput.includes("how long can period last")) {
        return "A typical period lasts between 3 and 7 days. If your period lasts longer or shorter than this, or if you experience excessive bleeding, it’s a good idea to check with your doctor.";
      }
      
      if (lowerInput.includes("period symptoms before period")) {
        return "Before your period, you may experience symptoms like bloating, mood swings, fatigue, tender breasts, headaches, and cramps. These symptoms are usually due to hormonal changes in your body.";
      }
      
      if (lowerInput.includes("how to track menstrual cycle")) {
        return "Tracking your menstrual cycle involves noting the first day of your period each month. You can track your cycle using apps, a calendar, or by monitoring symptoms like cramps or cervical mucus.";
      }
      
      if (lowerInput.includes("how to balance hormones naturally")) {
        return "To balance your hormones naturally, focus on maintaining a healthy diet rich in whole foods, exercise regularly, reduce stress, get enough sleep, and consider reducing your intake of processed foods and caffeine.";
      }
      
      if (lowerInput.includes("how does menopause affect period")) {
        return "Menopause causes a natural end to menstruation, typically occurring in your late 40s or early 50s. Before menopause, you may experience irregular periods, hot flashes, and other symptoms due to hormonal changes.";
      }
      
      if (lowerInput.includes("should I take iron during period")) {
        return "Iron supplements can be beneficial if you experience heavy periods, as they help replace lost iron due to menstruation. It’s always a good idea to talk to a healthcare provider before starting supplements.";
      }
      
      if (lowerInput.includes("pms symptoms")) {
        return "PMS (Premenstrual Syndrome) symptoms can include irritability, fatigue, bloating, breast tenderness, acne, and changes in appetite or sleep patterns. These symptoms typically occur 1-2 weeks before your period starts.";
      }
      
      if (lowerInput.includes("can birth control cause spotting")) {
        return "Yes, spotting or breakthrough bleeding can occur when starting or switching birth control methods. This is especially common in the first few months as your body adjusts to the hormones.";
      }
      
      if (lowerInput.includes("can exercise help with period cramps")) {
        return "Yes, light exercise can help alleviate period cramps. Activities like walking, swimming, or yoga can increase blood flow and release endorphins, which are natural pain relievers.";
      }
      
      if (lowerInput.includes("how to relieve bloating during period")) {
        return "To relieve bloating during your period, drink plenty of water, reduce salt intake, avoid caffeine, and consider eating smaller, more frequent meals. Gentle exercise and herbal teas like peppermint may also help.";
      }
      
      if (lowerInput.includes("what is the luteal phase")) {
        return "The luteal phase is the second half of your menstrual cycle, following ovulation. During this phase, the body prepares for a potential pregnancy, and if no pregnancy occurs, it ends with menstruation.";
      }
      
      if (lowerInput.includes("what happens during ovulation")) {
        return "During ovulation, an egg is released from the ovary and travels down the fallopian tube, where it may be fertilized. This is also when you are most fertile, and cervical mucus becomes more slippery and stretchy.";
      }
      
      if (lowerInput.includes("should I see a doctor for irregular periods")) {
        return "If your periods are consistently irregular, very painful, or last longer than usual, it's a good idea to consult a healthcare provider. Irregular periods can be a sign of conditions like PCOS or thyroid disorders.";
      }
      
      if (lowerInput.includes("can stress delay ovulation")) {
        return "Yes, stress can affect ovulation. High levels of stress can disrupt hormonal balance, which can delay or prevent ovulation. Managing stress with relaxation techniques and regular exercise can help support your cycle.";
      }
      
      if (lowerInput.includes("how to use ovulation predictor kit")) {
        return "An ovulation predictor kit tests your urine for a hormone surge (LH) that happens just before ovulation. To use it, follow the instructions on the kit and test daily around the time of your expected ovulation.";
      }
      
      if (lowerInput.includes("how to know if I'm pregnant before a missed period")) {
        return "You may experience early pregnancy symptoms like fatigue, nausea, or tender breasts before a missed period. However, the best way to confirm pregnancy is through a home pregnancy test or a visit to a doctor.";
      }
      
      if (lowerInput.includes("why are my periods irregular after stopping birth control")) {
        return "After stopping birth control, it may take a few months for your cycle to return to normal. Hormonal birth control can disrupt your natural hormonal rhythm, and it can take time for your body to regulate itself again.";
      }
      
      if (lowerInput.includes("how to improve period flow")) {
        return "To improve your period flow, consider staying hydrated, eating a balanced diet, exercising regularly, and reducing stress. However, if you're experiencing very heavy or light periods, consult a healthcare provider.";
      }
      
    if (lowerInput.includes("birth control impact period")) {
      return "Yes, hormonal birth control can alter your period. It may make your periods lighter, shorter, or even stop them altogether, depending on the method used.";
    }
    if (lowerInput.includes("can exercise affect period cycle")) {
        return "Yes, exercise can affect your period cycle. Intense physical activity can sometimes cause missed periods or irregular cycles. Moderate exercise, however, can promote regular periods and help reduce period symptoms.";
      }
      
      if (lowerInput.includes("period cycle phases")) {
        return "Your menstrual cycle has four phases: the menstrual phase (when bleeding occurs), the follicular phase (when the egg matures), ovulation (release of the egg), and the luteal phase (after ovulation until your next period).";
      }
      
      if (lowerInput.includes("how long after ovulation can you get pregnant")) {
        return "You can get pregnant within 12-24 hours after ovulation. The egg survives for up to 24 hours after release, while sperm can live for up to 5 days, increasing your chances of conception.";
      }
      
      if (lowerInput.includes("when to take pregnancy test")) {
        return "It is best to take a pregnancy test after you miss your period, as this allows enough time for the pregnancy hormone (hCG) to build up in your urine for accurate results.";
      }
      
      if (lowerInput.includes("what is cervical mucus")) {
        return "Cervical mucus is the fluid produced by the cervix throughout your menstrual cycle. It changes in texture and consistency, becoming more slippery and stretchy around ovulation, which helps sperm reach the egg.";
      }
      
      if (lowerInput.includes("how does body temperature relate to ovulation")) {
        return "Your body temperature slightly increases after ovulation due to the hormone progesterone. Tracking your basal body temperature can help predict ovulation and fertile windows.";
      }
      
      if (lowerInput.includes("can I track ovulation without a test kit")) {
        return "Yes, you can track ovulation without a test kit by monitoring changes in your cervical mucus, basal body temperature, and paying attention to signs like mild pelvic pain or breast tenderness.";
      }
      
      if (lowerInput.includes("what is luteal phase defect")) {
        return "Luteal phase defect occurs when the luteal phase is shorter than normal, resulting in insufficient progesterone production, which can make it harder to conceive or maintain a pregnancy.";
      }
      
      if (lowerInput.includes("can birth control stop periods completely")) {
        return "Yes, some forms of hormonal birth control, such as the depo shot or certain IUDs, can stop periods completely by preventing ovulation or thinning the uterine lining.";
      }
      
      if (lowerInput.includes("how to reduce period bloating")) {
        return "To reduce period bloating, try eating smaller meals, drinking herbal teas like peppermint, staying active, and reducing salt and sugar intake during your period.";
      }
      
      if (lowerInput.includes("what is anovulation")) {
        return "Anovulation is when ovulation does not occur during a menstrual cycle. This can be caused by stress, hormonal imbalances, polycystic ovary syndrome (PCOS), or thyroid issues.";
      }
      
      if (lowerInput.includes("can heavy periods cause anemia")) {
        return "Yes, heavy periods can lead to anemia if you lose a significant amount of blood each cycle. Anemia can cause fatigue, weakness, and pale skin. If you have heavy periods, consider discussing iron supplements with your doctor.";
      }
      
      if (lowerInput.includes("what is the follicular phase")) {
        return "The follicular phase is the first phase of the menstrual cycle, which begins on the first day of your period and ends when ovulation occurs. During this phase, your body prepares an egg for release.";
      }
      
      if (lowerInput.includes("when is ovulation most likely")) {
        return "Ovulation is most likely to occur around the middle of your cycle, typically 12-16 days before the start of your next period. However, cycle length varies, so tracking can help predict ovulation.";
      }
      
      if (lowerInput.includes("how can stress affect menstrual cycle")) {
        return "Stress can disrupt your menstrual cycle by affecting hormone levels, potentially causing late, missed, or heavier periods. Chronic stress can also lead to irregular cycles or even anovulation.";
      }
      
      if (lowerInput.includes("how to tell if I’m ovulating")) {
        return "Signs of ovulation include changes in cervical mucus (more slippery and clear), a slight rise in basal body temperature, and mild pelvic pain or cramping, known as mittelschmerz.";
      }
      
      if (lowerInput.includes("what is menstrual cycle length")) {
        return "The average menstrual cycle length is around 28 days, but it can range from 21 to 35 days. The length is measured from the first day of your period to the day before your next period starts.";
      }
      
      if (lowerInput.includes("how to balance hormones naturally")) {
        return "To balance hormones naturally, focus on eating a healthy diet, exercising regularly, reducing stress, getting enough sleep, and avoiding exposure to environmental toxins.";
      }
      
      if (lowerInput.includes("can poor diet affect period cycle")) {
        return "Yes, a poor diet can affect your menstrual cycle by disrupting hormone balance. Consuming a balanced diet rich in vitamins and minerals supports healthy hormone levels and regular periods.";
      }
      
      if (lowerInput.includes("why do periods get heavier with age")) {
        return "As you age, especially in your 30s and 40s, hormonal changes may cause heavier periods. Conditions like fibroids or endometriosis can also contribute to increased menstrual flow as you age.";
      }
      
      if (lowerInput.includes("what are uterine fibroids")) {
        return "Uterine fibroids are non-cancerous growths in the uterus that can cause symptoms like heavy periods, pelvic pain, and bloating. They are common in women of reproductive age.";
      }
      
      if (lowerInput.includes("how to track my period")) {
        return "To track your period, note the start and end dates of your period each month. You can use a calendar, an app, or a journal to monitor your cycle and any symptoms you experience.";
      }
      
      if (lowerInput.includes("can hormonal imbalance affect periods")) {
        return "Yes, hormonal imbalances can disrupt your menstrual cycle, leading to irregular periods, heavy or light bleeding, or missed periods. Conditions like PCOS or thyroid disorders can cause such imbalances.";
      }
      
      if (lowerInput.includes("what is endometriosis")) {
        return "Endometriosis is a condition where tissue similar to the uterine lining grows outside the uterus, causing symptoms like painful periods, heavy bleeding, and infertility.";
      }
      
      if (lowerInput.includes("what is a missed period")) {
        return "A missed period is when you do not get your period on the expected date. It can be caused by pregnancy, stress, hormonal imbalances, or other factors like illness or changes in weight.";
      }
      
      if (lowerInput.includes("can exercise reduce period pain")) {
        return "Yes, exercise can help reduce period pain by increasing blood flow, releasing endorphins, and reducing muscle tension. Activities like yoga, walking, or swimming can be helpful.";
      }
      
      if (lowerInput.includes("what is the role of progesterone")) {
        return "Progesterone is a hormone that helps prepare your body for pregnancy. It thickens the uterine lining after ovulation to support a fertilized egg. If pregnancy does not occur, progesterone levels drop, triggering menstruation.";
      }
      
      if (lowerInput.includes("can vitamin D affect periods")) {
        return "Vitamin D plays a role in hormone regulation, and low levels can contribute to irregular periods and other reproductive health issues. Ensure you get enough through sun exposure, food, or supplements.";
      }
      
      if (lowerInput.includes("what is perimenopause")) {
        return "Perimenopause is the transition period leading up to menopause, typically starting in your 40s. During this time, you may experience irregular periods, hot flashes, mood swings, and sleep disturbances due to fluctuating hormone levels.";
      }
      
      if (lowerInput.includes("how does thyroid affect menstrual cycle")) {
        return "An underactive thyroid (hypothyroidism) can cause heavy or irregular periods, while an overactive thyroid (hyperthyroidism) can lead to light or infrequent periods. Thyroid health plays an important role in your menstrual cycle.";
      }
      
      if (lowerInput.includes("how does birth control regulate periods")) {
        return "Birth control pills help regulate periods by providing consistent hormone levels. They prevent ovulation and thin the uterine lining, resulting in more predictable and often lighter periods.";
      }
      
      if (lowerInput.includes("how to ease period cramps naturally")) {
        return "To ease period cramps naturally, try applying heat to your abdomen, drinking herbal teas like ginger or chamomile, doing light exercise, and practicing relaxation techniques like deep breathing.";
      }
      
      if (lowerInput.includes("what is the follicular phase")) {
        return "The follicular phase is the phase of your menstrual cycle that begins on the first day of your period and ends when ovulation occurs. It is characterized by the growth of follicles in the ovaries, which contain eggs.";
      }
      
      if (lowerInput.includes("how to know if I'm ovulating")) {
        return "Signs of ovulation include increased cervical mucus that is clear and stretchy, a slight rise in body temperature, and mild pelvic pain or cramping.";
      }
      
      if (lowerInput.includes("how to treat period cramps")) {
        return "To treat period cramps, try over-the-counter pain relievers like ibuprofen, apply a heating pad, drink herbal teas, and do light exercises to increase blood flow and relieve tension.";
      }
      
      if (lowerInput.includes("why does period blood change color")) {
        return "Period blood can change color due to the flow rate. Darker blood is typically older blood that has taken longer to exit the body, while fresh blood is usually brighter red. Both are normal.";
      }
      
      if (lowerInput.includes("how to balance estrogen levels")) {
        return "To balance estrogen levels, eat a healthy diet rich in fiber, healthy fats, and antioxidants. You can also reduce stress, maintain a healthy weight, and avoid exposure to environmental toxins.";
      }
      
      if (lowerInput.includes("how does dehydration affect periods")) {
        return "Dehydration can worsen period symptoms, like bloating and cramps. Drinking enough water during your cycle can help reduce discomfort and keep your body functioning properly.";
      }
      
      if (lowerInput.includes("what is a normal period cycle")) {
        return "A normal period cycle typically lasts 21 to 35 days, with periods lasting between 3 and 7 days. However, cycle length can vary from person to person, so it's important to track your own cycle.";
      }
      
      if (lowerInput.includes("how to know if you're pregnant after ovulation")) {
        return "You can take a pregnancy test after you miss your period. Early signs of pregnancy may include nausea, fatigue, sore breasts, and frequent urination. However, the most reliable method is to wait for a missed period and test.";
      }
      
      if (lowerInput.includes("can hormonal birth control cause acne")) {
        return "Some forms of hormonal birth control, like the pill, may cause acne in some people due to hormone fluctuations. However, other methods may help reduce acne, so it's best to consult with a healthcare provider.";
      }
      
      if (lowerInput.includes("what is the luteal phase")) {
        return "The luteal phase is the second half of your menstrual cycle, occurring after ovulation. It is characterized by the release of progesterone, which helps prepare the uterus for a potential pregnancy.";
      }
      
      if (lowerInput.includes("can birth control pills help with acne")) {
        return "Yes, certain birth control pills can help reduce acne by regulating hormones that affect skin oil production. These pills often contain a combination of estrogen and progestin.";
      }
      
      if (lowerInput.includes("how to treat irregular periods naturally")) {
        return "To treat irregular periods naturally, focus on reducing stress, maintaining a healthy weight, getting enough sleep, and eating a balanced diet with plenty of whole foods and fiber.";
      }
      
      if (lowerInput.includes("how does polycystic ovary syndrome affect periods")) {
        return "PCOS can cause irregular periods, longer cycles, and anovulation. Hormonal imbalances in PCOS may also lead to symptoms like acne, excessive hair growth, and weight gain.";
      }
      
      if (lowerInput.includes("how can I track my fertile window")) {
        return "To track your fertile window, monitor your cervical mucus, track basal body temperature, and use ovulation predictor kits. The fertile window typically occurs a few days before and during ovulation.";
      }
      
      if (lowerInput.includes("can anxiety affect period cycle")) {
        return "Yes, anxiety and stress can disrupt your menstrual cycle by affecting hormone levels, which may lead to missed or irregular periods. Managing stress through relaxation techniques can help support your cycle.";
      }
      
      if (lowerInput.includes("what is breakthrough bleeding")) {
        return "Breakthrough bleeding is light bleeding or spotting that occurs between periods, often due to hormonal fluctuations or starting new birth control methods. It is usually not a cause for concern.";
      }
      
      if (lowerInput.includes("how long does ovulation last")) {
        return "Ovulation typically lasts 12-24 hours, during which time the egg can be fertilized if sperm is present. However, sperm can survive for up to 5 days, so it's important to track the fertile window.";
      }
      

    // Default response if no matching input
    return "I'm sorry, I didn't quite understand that. Can you rephrase?";
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Period Tracker Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.sender === "bot" ? "bot" : "user"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything about your cycle..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
