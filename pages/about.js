import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => (
  <div>
    <Header />
    <div className="page_nav d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center">
        <Link href="">
          <a>Homepage</a> 
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <div className="main_title">About Me</div>
      </div>
    </div>
    <section className="subpage blog_detail blank_page">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="content">
              <div className="content-text">
                <h1>About Me</h1>
                <p>
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  ”Yeni bir fon kurulması, mevcut fonun bir kısmının  veya tamamen yeni bir proje başlatılması şeklinde düşüncelerimiz mevcut. Şu anki düşüncemiz ise yeni bir fon kurmaktan ziyade mevcut fonun bir kısmını bu sektöre ayırmak.” Şeklinde açıklamalarda bulundu.
                </p>
                <p>
                  Gelen bilgilere göre Batalion’un uzun süre beklemek istememesi nedeni ile Lightspeed görevinden bir süre ayrılarak kendi Kripto Para odaklı projesini ortaya çıkarabileceği düşünülüyor.ildi. Josef Sural'ın cenazesinin bulunduğu taput bu masaya konulurken, futbolcular ve teknik ekip de siyah kıyafetler giyerek tabutun etrafında sıralandı.
                  Batalion, kripto paralarla tek Lightspeed ortağı değil. Firmanın Snapchat yatırımını üstlenen ve şimdi bir Bitcoin savunucusu olan Jeremy Liew, Lightspeed’in 2014 yılında kripto para cüzdanı Blockchain.com’a yaptığı yatırımın bir parçasıydı.
                </p>
                <h3>Diğer Sermaye Firmalarından Destek</h3>
                <p>Lightspeed’in kripto paralara olan ilgisi, diğer birçok büyük çaplı sermaye firması tarafından takip ediliyor. Geçtiğimiz ay Blockchain ve kripto para odaklı projelere yatırım yapmayı düşündüğünü açıklayan Comcast Ventures firması bunlar arasında yer alıyor.</p>
                <h4>"LOREM IPSUM SIT DOLOR"</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos eius enim eum hic, iste laboriosam, laudantium magnam mollitia necessitatibus neque odio officia porro, provident quos reprehenderit tempore totam velit!</p>
                <figure>
                  <a className="fancy_img" href="/img/wall.jpg" >
                    <img src="/img/wall.jpg"/>
                    </a>
                  <figcaption>Diğer Sermaye Firmalarından Destek</figcaption>
                </figure>
                <p>
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  ”Yeni bir fon kurulması, mevcut fonun bir kısmının  veya tamamen yeni bir proje başlatılması şeklinde düşüncelerimiz mevcut. Şu anki düşüncemiz ise yeni bir fon kurmaktan ziyade mevcut fonun bir kısmını bu sektöre ayırmak.” Şeklinde açıklamalarda bulundu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
