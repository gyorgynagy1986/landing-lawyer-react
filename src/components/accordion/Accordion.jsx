import React, {useState} from 'react'; 
import FAQ from './FAQ';
import './accordion.css';

function Accordion () {

    const  [faqs, setfaqs] = useState ([

        {
          question: '1 qestion',
          answers: ' five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta',
          open: false
        },
        {
          question: '2 qestion',
          answers: '2 answer',
          open: false
        },
        {
          question: '3 qestion',
          answers: '3 answer',
          open: false
        },
        {
          question: '4 qestion',
          answers: '3 answer',
          open: false
        },
        {
          question: '4 qestion',
          answers: '3 answer',
          open: false
        }
      ])

      const toggleFAQ = index => {
          setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
          }))
      }
    
    return (
        <div className='faqs'>
        {faqs.map((faq, i) => (
            <div>
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            </div>
        ))}
      </div>
    )
}

export default Accordion
