import React, { useState } from 'react';
import './index.css';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { message: "Hey Farmer Friend is here !! 👋\nHow can I help you today?", role: "incoming" },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (!showChatbot) {
      document.body.classList.add('show-chatbot');
    } else {
      document.body.classList.remove('show-chatbot');
    }
  };

  const customQuestionsAndAnswers = [
    { keywords: ["hi", "hello", "hey", "hy", "how are you", "how are u", "can u help me", "can u help me", "hy my name is", "suno bhai mera naam", "suno"], answer: "How may I help you?" },
    { keywords: ["fever medicine", "today's weather"], answer: "The weather is sunny and warm today." },
    { keywords: ["paracetamol", "govind"], answer: "Paracetamol is a medicine used to treat mild to moderate pain. Paracetamol can also be used to treat fever (high temperature). It's dangerous to take more than the recommended dose of paracetamol. Paracetamol overdose can damage your liver and cause death." },
    { keywords: ["i am suffering from fever"], answer: "Tell me about your symptoms. Have you taken any medication?" },
    { keywords: ["99-103"], answer: "It's important to stay hydrated. Drink plenty of water and get some rest." },
    { keywords: ["joke", "govind"], answer: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    // Add more keyword-answer pairs as needed
    { keywords: ["crop rotation", "farming practices"], answer: "Crop rotation is the practice of growing different crops in the same area in sequenced seasons. It helps improve soil fertility and reduces pests and diseases." },
    { keywords: ["organic farming", "chemical-free agriculture"], answer: "Organic farming avoids the use of synthetic chemicals such as pesticides and fertilizers. It promotes sustainable practices like crop rotation, composting, and natural pest control methods." },
    { keywords: ["irrigation techniques", "water management in farming"], answer: "There are various irrigation techniques such as drip irrigation, sprinkler irrigation, and flood irrigation. Each has its advantages depending on the crop and soil type." },
    { keywords: ["crop diseases", "plant health"], answer: "Common crop diseases include powdery mildew, leaf spot, and root rot. Proper crop rotation, sanitation, and timely application of fungicides can help manage these diseases." },
    // Farmer-related questions and answers
    { keywords: ["best time to plant tomatoes"], answer: "Tomatoes are warm-season crops. The best time to plant them is after the last frost date in your area when the soil temperature reaches around 60°F (15°C)." },
    { keywords: ["how to control weeds in fields"], answer: "Weed control can be achieved through mechanical methods like hoeing or hand weeding, cultural practices such as mulching, and chemical methods like herbicides. Integrated weed management combining different techniques is often the most effective." },
    { keywords: ["how to improve soil fertility"], answer: "Soil fertility can be improved by adding organic matter like compost or manure, using cover crops, practicing crop rotation, and applying balanced fertilizers based on soil test results." },
    { keywords: ["common pests in corn fields"], answer: "Common pests in corn fields include corn earworm, corn rootworm, and armyworm. Monitoring pest populations and implementing integrated pest management strategies are essential for effective control." },
    { keywords: ["how to prevent soil erosion"], answer: "Soil erosion can be prevented by planting cover crops, maintaining vegetative buffers along waterways, contour plowing, terracing, and practicing conservation tillage methods." },
    // Add more farmer-related questions and answers
    { keywords: ["how to prune fruit trees"], answer: "Pruning fruit trees involves removing dead or diseased branches, shaping the tree for better sunlight exposure and air circulation, and promoting fruit production. It's best done during the dormant season." },
    { keywords: ["best crops for hydroponic farming"], answer: "Hydroponic farming is suitable for a variety of crops, including lettuce, tomatoes, cucumbers, peppers, and herbs like basil and mint." },
    { keywords: ["how to attract pollinators to the garden"], answer: "To attract pollinators like bees and butterflies to your garden, plant a diverse range of flowering plants, avoid using pesticides harmful to pollinators, and provide nesting sites and water sources." },
    { keywords: ["how to identify nutrient deficiencies in plants"], answer: "Nutrient deficiencies in plants can be identified by observing symptoms such as yellowing leaves, stunted growth, or leaf discoloration. Soil tests can also help determine nutrient levels and deficiencies." },
    // Add more farmer-related questions and answers
  ];
  
  

  const handleChat = () => {
    let message = userMessage.trim();
    if (!message) return;

    const updatedChatHistory = [...chatHistory, { message, role: "outgoing" }];
    setChatHistory(updatedChatHistory);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);

      let answerMessage = "I'm sorry, I don't have an answer to that.";

      customQuestionsAndAnswers.forEach(item => {
        if (item.keywords.some(keyword => message.toLowerCase().includes(keyword))) {
          answerMessage = item.answer;
        }
      });

      const updatedChatHistoryWithAnswer = [...updatedChatHistory, { message: answerMessage, role: "incoming" }];
      setChatHistory(updatedChatHistoryWithAnswer);

      // Clear the user input field
      setUserMessage('');
    }, 2000); // Adjust the delay time as needed (2 seconds in this example)
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };


  return (
    <div>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-rounded">Chatbot</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className={`chatbot ${showChatbot ? '' : 'hidden'}`}>
        <ul className="chatbox">
          {chatHistory.map((item, index) => (
            <li key={index} className={`chat ${item.role}`}>
              {item.role === 'incoming' && (
                <span className="material-symbols-outlined">smart_toy</span>
              )}
              <p>{item.message}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a question..."
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
            Send
          </span>
        </div>
        {isThinking && <p className="thinking-message">Thinking...</p>}
      </div>
    </div>
  );
}

export default Chatbot;
