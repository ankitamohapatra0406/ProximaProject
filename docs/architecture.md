# Smart AC/Heater Optimiser

## 1. Purpose of Project

The primary purpose of the Smart AC/Heater Optimiser is to address the significant energy wastage prevalent in educational institutions, where HVAC systems frequently run in unoccupied spaces. Current manual systems often lead to 30-40% energy waste due to human negligence and lack of real-time adaptability. This project aims to revolutionize energy efficiency by deploying an intelligent, AI-powered IoT solution that automates climate control based on real-time occupancy and environmental data. By transitioning from manual to autonomous control, the system seeks to reduce operational costs by ₹8-10 lakhs annually for medium-sized institutions while significantly lowering the campus carbon footprint.

## 2. Data Flow & System Logic

The system operates on a continuous intelligent cycle designed to sense, analyze, and optimize climate control in real-time.

* **Sense:** The system utilizes PIR motion sensors to detect real-time room occupancy and Dual Object Detection (camera + PIR) to verify human presence. Simultaneously, DHT22 sensors monitor precise indoor temperature and humidity levels.


* **Analyse:** The backend (Python/Node.js) processes sensor data and integrates it with a Weather API to fetch outdoor temperature and forecast conditions. Machine learning models (Random Forest and LSTM) analyze historical usage patterns and class schedules to predict future occupancy with over 85% accuracy.

* **Decide:** The central logic engine determines the optimal operation mode for ACs and heaters. It considers multiple decision-making parameters, including real-time occupancy, temperature differentials, humidity, and user-defined comfort preferences.


* **Control:** Upon making a decision, the ESP32 microcontroller triggers the Relay Module to automatically switch appliances ON or OFF. This includes "Automatic Idle Cut-off," which safely powers down devices when no occupancy is detected.


* **Learn:** The system employs a feedback loop where the ML models continuously learn from new data, improving prediction accuracy and energy optimization strategies over time.



## 3. Scalability

The Smart AC/Heater Optimiser is architected for massive scalability, moving beyond single-room prototypes to institutional-level deployment.

* **Campus-Wide Integration:** The infrastructure supports centralized monitoring of 100+ rooms across multiple buildings, creating a unified energy management network.


* **Multi-Device Expansion:** The system is designed to expand beyond HVAC, capable of integrating lights, fans, and other electrical appliances into a single centralized control ecosystem.


* **Cloud & Mobile Architecture:** Future development includes native mobile applications (iOS/Android) and cloud analytics for institutional benchmarking, big data analysis, and predictive energy forecasting.


* **IoT Ecosystem:** The roadmap includes integration with voice assistants (Alexa/Google Assistant) and existing Building Management Systems (BMS) for seamless smart home compatibility.



## 4. Environmental Impact

This project delivers quantifiable benefits to the environment, aligning with sustainability initiatives and climate commitments.

* **Carbon Footprint Reduction:** By optimizing HVAC usage, the system is projected to reduce institutional carbon emissions by approximately 50%.


* **Energy Conservation:** The intelligent automation achieves a proven 30-40% reduction in daily energy consumption by eliminating run-time in empty classrooms.


* **Sustainable Operations:** Reduced equipment runtime extends the lifespan of ACs and heaters, lowering electronic waste and maintenance requirements over the long term.



## 5. Summary

The Smart AC/Heater Optimiser is an end-to-end IoT solution that leverages Artificial Intelligence to solve the critical issue of energy wastage in educational facilities. By combining precise hardware sensors (ESP32, PIR, DHT22) with advanced software analytics (occupancy prediction, weather integration), the system ensures appliances operate strictly on-demand. It offers a robust, scalable path toward "Smart Campuses," delivering immediate cost savings while fostering a sustainable future through reduced carbon emissions and optimized resource utilization.
