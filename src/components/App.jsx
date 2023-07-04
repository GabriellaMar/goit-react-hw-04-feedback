import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

// import PropTypes from 'prop-types';

export const App = ()=> {
  const [good, setGood] =useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad , setBad] = useState(0);

 const  countFeedbackStatistics = (option) => {
  switch(option){
    case 'good':
      setGood((prevState) =>prevState +1);
      break;
      case 'neutral':
        setNeutral((prevState) =>prevState +1);
      break;
      case 'bad':
        setBad((prevState) =>prevState +1);
      break;
      default:
        return;
  }
       }

 const  countTotalFeedback = () => {
         const values = Object.values({ good, neutral, bad });
         return values.reduce((total, value) => total + value, 0)
       }

 const countPositiveFeedbackPercentage = () => {
            const totalFeedback = countTotalFeedback();
             if (totalFeedback === 0) {
              return 0
           }
             const percentage = (good / totalFeedback) * 100;
             return parseInt(percentage)
         };

  return  <div>
         <Section title="Please leave Feedback">
             < FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={countFeedbackStatistics} />
          </Section >
  
          <Section title="Statistic">
             {countTotalFeedback() === 0
              ? (<Notification message="There is no feedback" />)
               : (<Statistics
                 good={good}
                 neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
              )}
          </Section >
        </div>
}

// export class App extends Component {
//   // constructor(){
//   //   super()
//   //   this.state ={
//   //     good: 0,
//   //     neutral: 0,
//   //     bad: 0
//   //   }
//   // }
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   countFeedbackStatistics = (option) => {
//     this.setState((prevState) => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     })
//   }
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const values = Object.values({ good, neutral, bad });
//     return values.reduce((total, value) => total + value, 0)
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     if (totalFeedback === 0) {
//       return 0
//     }
//     const percentage = (good / totalFeedback) * 100;
//     return parseInt(percentage)
//   }

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     return (
//       <div>
//         <Section title="Please leave Feedback">
//           < FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.countFeedbackStatistics} />
//         </Section >

//         <Section title="Statistic">

//           {totalFeedback === 0
//             ? (<Notification message="There is no feedback" />)
//             : (<Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={totalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage()} />
//             )}
//         </Section >
//       </div>
//     )
//   }
// };
// App.propTypes = {
  
// };