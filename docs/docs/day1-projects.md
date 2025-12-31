---
sidebar_position: 2
---

# Day 1 Projects
# 第1天项目

## Morning: Spaghetti Marshmallow Challenge
## 上午：Spaghetti Marshmallow 挑战

### Challenge Results | 挑战结果

- **Team Name | 团队名称**:白日梦想家
- **Final Height | 最终高度**: [94 cm]
- **Marshmallow on Top? | 棉花糖在顶部？**: [Yes]

### Our Approach | 我们的方法

遵循上小下大原则，将多个四棱锥拼接在一起，在薄弱处用单根意大利面固定。在最低处垂了一个棉花糖，是参考了高楼大厦里的调谐质量阻尼器，减轻塔的震动。

### What We Learned | 我们学到了什么

1. [Learning 1]cooperation
2. [Learning 2]plan before building
3. [Learning 3]三角形具有稳定性

### Photos | 照片

![这是一张我的棉花糖意大利面塔的图片](/img/棉花糖意大利面塔.jpg)

---

## Afternoon: Arduino Hardware CTF
## 下午：Arduino 硬件 CTF

### Flags Captured | 捕获的 Flag

- [ ] Flag 1: Sensor Reading
- [ ] Flag 2: Actuator Control
- [ ] Flag 3: Sensor to Actuator
- [ ] Flag 4: Complex Logic
- [ ] Flag 5: Creative Project

### My Favorite Challenge | 我最喜欢的挑战

![这是一张我的Arduino三原色调节器的图片](/img/Arduino三原色调节器.jpg)
[Share about your favorite challenge and what you learned]

### Arduino Code Snippet | Arduino 代码片段

Here's a code snippet from one of my challenges:

这是我某个挑战中的代码片段：

```cpp
// Add your Arduino code here
int redPin = 9;                            // R – digital 9
int greenPin = 10;                     // G – digital 10
int bluePin = 11;                        // B – digital 11
int potRedPin = 0;                    // potentiometer 1 – analog 0
int potGreenPin = 1;                // potentiometer 2 – analog 1int potBluePin = 2;                  
int potBluePin = 2;                               // potentiometer 3 – analog 2
void setup(){
pinMode(redPin,OUTPUT);
pinMode(greenPin,OUTPUT);
pinMode(bluePin,OUTPUT);
Serial.begin(9600);                           
}
void loop(){
int potRed = analogRead(potRedPin); 　  
int potGreen = analogRead(potGreenPin);    
int potBlue = analogRead(potBluePin); 　  
int val1 = map(potRed,0,1023,0,255); 　      
int val2 = map(potGreen,0,1023,0,255);
int val3 = map(potBlue,0,1023,0,255);

// print value of red, green and blues LEDs from serial port
Serial.print("Red:");
Serial.print(val1);
Serial.print("Green:");
Serial.print(val2);
Serial.print("Blue:");
Serial.println(val3);
colorRGB(val1,val2,val3); // configure the analog value for RGB LED
}
}

//define the colorRGB function
void colorRGB(int red, int green, int blue){
analogWrite(redPin,constrain(red,0,255));
analogWrite(greenPin,constrain(green,0,255));
analogWrite(bluePin,constrain(blue,0,255));
}
