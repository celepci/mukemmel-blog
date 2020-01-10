import React, { PureComponent } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const BlogPost = ({ post }) => (
  <div>
    <Header />

    <div className="page_nav d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center">
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <div className="main_title">{post.title}</div>
      </div>
    </div>
    <section className="subpage blog_detail">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="content"><a className="main_image fancy_img" href="/img/wall.jpg"><img src="/img/wall.jpg" /></a>
              <div className="content-text">
                <div className="guzel_alan_kare_uzun guzel_alan_fixed">Dikey Sabit Reklam</div>
                <div className="kaynak_tarih">Muhammet Celepci<i className="far fa-dot-circle"></i>{post.date}, {post.time}</div>
                <h1>{post.title}</h1>
                
                <ReactMarkdown
                  source={post.details}
                  skipHtml={false}
                  escapeHtml={false}
                  renderers={{ Paragraph: 'span' }}
                  unwrapDisallowed
                />

                <p>
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  ”Yeni bir fon kurulması, mevcut fonun bir kısmının  veya tamamen yeni bir proje başlatılması şeklinde düşüncelerimiz mevcut. Şu anki düşüncemiz ise yeni bir fon kurmaktan ziyade mevcut fonun bir kısmını bu sektöre ayırmak.” Şeklinde açıklamalarda bulundu.
                </p>
                <div className="guzel_alan_yatay">Yatay Reklam</div>
                <p>
                  Gelen bilgilere göre Batalion’un uzun süre beklemek istememesi nedeni ile Lightspeed görevinden bir süre ayrılarak kendi Kripto Para odaklı projesini ortaya çıkarabileceği düşünülüyor.ildi. Josef Sural'ın cenazesinin bulunduğu taput bu masaya konulurken, futbolcular ve teknik ekip de siyah kıyafetler giyerek tabutun etrafında sıralandı.
                  Batalion, kripto paralarla tek Lightspeed ortağı değil. Firmanın Snapchat yatırımını üstlenen ve şimdi bir Bitcoin savunucusu olan Jeremy Liew, Lightspeed’in 2014 yılında kripto para cüzdanı Blockchain.com’a yaptığı yatırımın bir parçasıydı.
                </p>
                <h2>Diğer Sermaye Firmalarından Destek</h2>
                <figure><a className="fancy_img" href="/img/wall.jpg"><img src="/img/wall.jpg" /></a>
                  <figcaption>Diğer Sermaye Firmalarından Destek</figcaption>
                </figure>
                <p>Lightspeed’in kripto paralara olan ilgisi, diğer birçok büyük çaplı sermaye firması tarafından takip ediliyor. Geçtiğimiz ay Blockchain ve kripto para odaklı projelere yatırım yapmayı düşündüğünü açıklayan Comcast Ventures firması bunlar arasında yer alıyor.</p>
                <h3>Yeni Fon Müjdesi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos eius enim eum hic, iste laboriosam, laudantium magnam mollitia necessitatibus neque odio officia porro, provident quos reprehenderit tempore totam velit!</p>
                <figure><a className="fancy_img" href="/img/wall.jpg"><img src="/img/wall.jpg" /></a>
                  <figcaption>Diğer Sermaye Firmalarından Destek</figcaption>
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos eius enim eum hic, iste laboriosam, laudantium magnam mollitia necessitatibus neque odio officia porro, provident quos reprehenderit tempore totam velit!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos eius enim eum hic, iste laboriosam, laudantium magnam mollitia necessitatibus neque odio officia porro, provident quos reprehenderit tempore totam velit!
                </p>
                <h4>Diğer Sermaye Firmalarından Destek</h4>
                <p>
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  ”Yeni bir fon kurulması, mevcut fonun bir kısmının  veya tamamen yeni bir proje başlatılması şeklinde düşüncelerimiz mevcut. Şu anki düşüncemiz ise yeni bir fon kurmaktan ziyade mevcut fonun bir kısmını bu sektöre ayırmak.” Şeklinde açıklamalarda bulundu.
                </p>
                <p>Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;</p>
                <p>
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                  Firma ortaklarından Aaron Batalion yapmış olduğu açıklamada yatırım için ele aldıkları yöntemleri dile getirerek;
                </p>
                <div className="guzel_alan_yatay">Yatay Reklam</div>
                <p>
                  Gelen bilgilere göre Batalion’un uzun süre beklemek istememesi nedeni ile Lightspeed görevinden bir süre ayrılarak kendi Kripto Para odaklı projesini ortaya çıkarabileceği düşünülüyor.ildi. Josef Sural'ın cenazesinin bulunduğu taput bu masaya konulurken, futbolcular ve teknik ekip de siyah kıyafetler giyerek tabutun etrafında sıralandı.
                  Batalion, kripto paralarla tek Lightspeed ortağı değil. Firmanın Snapchat yatırımını üstlenen ve şimdi bir Bitcoin savunucusu olan Jeremy Liew, Lightspeed’in 2014 yılında kripto para cüzdanı Blockchain.com’a yaptığı yatırımın bir parçasıydı.
                </p>
                <div className="subtitle mini"><i className="fas fa-tag"></i>Tags</div>
                <div className="tags"><a className="tags-item" href="">Blockchain</a><a className="tags-item" href="">Bitcoin</a><a className="tags-item" href="">Stratis</a><a className="tags-item" href="">Smart Contracts</a><a className="tags-item" href="">Solidity Programming</a><a className="tags-item" href="">Etherium</a></div>
                <div className="subtitle mini"><i className="fas fa-share"></i>Share</div>
                <div className="share"><a className="share-item facebook" href=""><i className="fab fa-facebook"></i>Paylaş</a><a className="share-item twitter" href=""><i className="fab fa-twitter"></i>Tweetle</a><a className="share-item whatsapp" href=""><i className="fab fa-whatsapp"></i>Paylaş</a></div>
              </div>
            </div>
            <div className="guzel_alan_yatay big">Yatay Reklam</div>
          </div>
          <div className="col-xl-12">
            <h4 className="main_title md">Other Posts</h4>
            <div className="blog-slider owl-carousel owl-theme owl-theme_custom">
              <div className="blog-slider-item">
                <a className="news-item" href="#!">
                  <div className="image">
                    <img src="/img/img7.jpg" />
                  </div>
                  <div className="news-item-detail">
                    <div className="news-item-detail-icon">
                      <div className="svg">
                        <svg>
                          <use xlinkHref="#book"></use>
                        </svg><span>5 dk</span>
                      </div>
                    </div>
                    <div className="news-item-detail-content">
                      <div className="title">The Best of 10 Frontend Tools</div>
                      <div className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta error maxime sit vel. Asperiores consectetur dolor dolores eum fugit id nesciunt odio quasi reiciendis voluptate. Culpa earum error quod!</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
