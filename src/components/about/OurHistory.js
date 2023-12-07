import React from 'react';
import './OurHistory.css'; 

const OurHistory = () => {
    return (
        <div className="our-history-section">
      <div className="text-wrapper">Our History</div>
      <div className="timeline-block">
        <div className="full-timeline">
          <div className="element">
            <div className="div">1980</div>
            <p className="p">
              Food Not Bombs originated in 1980 when eight anti-nuclear activists in Cambridge, Massachusetts, launched
              bake sales to fund a friend’s legal costs after a their arrest during the May 24th Occupation Attempt of
              Seabrook Nuclear Power Station. <br />
              <br />
              One of the activists was also a volunteer from the local Bread and Circus grocery, and who donated unsold
              produce to nearby housing projects. The presence of a glass tower where nuclear missiles were designed
              influenced the name Food Not Bombs.
            </p>
            <div className="cambridge-where-it">Cambridge-where it all&nbsp;&nbsp;started.</div>
          </div>
          <div className="element-2">
            <p className="FNB-comes-to-san">
              FNB Comes to <br />
              San Francisco
            </p>
            <p className="p">
              Co-founder Keith McHenry established a second group in San Francisco, deciding to share meals and
              literature every Monday at noon in Golden Gate Park. They applied for a permit from the Recreation and
              Parks Department, receiving no response until August 15, 1988, when 45 riot police arrested nine
              volunteers. <br />
              <br />
              Media coverage sparked widespread support, leading to over 100 people marching the next Monday. The police
              made 29 arrests, gaining global attention.
            </p>
            <div className="text-wrapper-2">1988</div>
          </div>
          <div className="element">
            <div className="div">1999</div>
            <p className="p">
              News of the San Francisco arrests inspired the formation of Food Not Bombs groups in Seattle, Washington;
              Victoria, British Columbia; New York City, New York; and Washington, D.C.A <br />
              <br />A Spanish group was the first to translate the Food Not Bombs book, leading to a European book tour,
              which connected with Europeans opposing the European Union and the World Trade Organization. Inspired,
              Spanish activists in turn sought to join a North American tour, resulting in the UnFree Trade Tour.
              Covering 60 cities, it featured a World Trade Organization video and encouraged disrupting WTO Summits.
            </p>
            <div className="text-wrapper-3">FNB Goes Global</div>
          </div>
          <div className="element-2">
            <div className="text-wrapper-4">Legal Battles</div>
            <p className="p">
              In April 2009, the city of Middletown, Connecticut issued a cease-and-desist order to the local Food Not
              Bombs (FNB) chapter, citing the organization for distributing food without a license. In 2011, FNB faced
              feeding bans in Florida, and similar laws emerged in other places like Philadelphia and Houston. <br />
              <br />
              In April 2011, the 11th Circuit Court of Appeals upheld an Orlando ordinance, reversing a previous ruling
              and removing a permanent injunction against it. Orlando Mayor Buddy Dyer faced criticism for referring to
              FNB activists as &#34;food terrorists.&#34;
            </p>
            <div className="text-wrapper-2">2007</div>
          </div>
          <div className="element">
            <div className="div">2011</div>
            <div className="text-wrapper-5">Partnering with New Movements</div>
            <p className="p">
              During the 2011 Occupy Wall Street movement, Food Not Bombs groups actively supported occupation camps
              across the US.
            </p>
          </div>
        </div>
      </div>
      <div className="read-more-class">
        <img className="read-more" src={'https://imgur.com/Ai37QYH.png'} alt={'READ MORE'} />
      </div>
    </div>
    );
};

export default OurHistory;
