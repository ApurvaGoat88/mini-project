// Home.js
import { useState, useEffect } from 'react';
import React from 'react'
import { Copy, ArrowRight } from 'lucide-react'
import './index.css'; // Import your CSS file

const Home = () => {
    const initialLoginState = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);
  
    useEffect(() => {
      // Save the current login state to localStorage whenever it changes
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
  
    const handleLogin = () => {
      // Perform login logic here
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      // Perform logout logic here
      setIsLoggedIn(false);
    };
  
  return (
    <div>
      <div className="w-full flex overflow-hidden min-h-full items-center flex-col ">
        <div className="w-[90%] rounded-3xl flex items-center flex-col h-20 bg-blue-500 pt-4  mt-6 ">
          <header data-thq="thq-navbar" className="home-navbar-interactive pt-2 ">
            <span className="home-logo font-bold">CLOTHING</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links   gap-8 ">
                <span>Home</span>
                <span className="home-nav2">Shop</span>
                <span className="home-nav3">New Arrivals</span>
                <span className="home-nav4">Sale</span>
                <span className="home-nav5">Contact</span>
              </nav>
              <div className="home-buttons gap-5">
      <button
        className={`home-login button ${isLoggedIn ? 'hidden' : ''}`}
        onClick={handleLogin}
      >
        <a href="/login">Login</a>
      </button>
      <button
        className={`home-register button ${isLoggedIn ? 'hidden' : ''}`}
        onClick={handleLogin}
      >
        <a href="/register">Register</a>
      </button>
      <button
        className={`home-logout button ${isLoggedIn ? '' : 'hidden'}`}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
            </div>
            <div data-thq="thq-burger-menu" class="home-burger-menu">
            <svg viewBox="0 0 1024 1024" class="home-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z">
              </path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" class="home-mobile-menu">
            <div class="home-nav">
              <div class="home-top">
                <span class="home-logo1">CLOTHING</span>
                <div data-thq="thq-close-menu" class="home-close-menu">
                  <svg viewBox="0 0 1024 1024" class="home-icon02">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                    </path>
                  </svg>
                </div>
              </div>
              <nav class="home-links1">
                <span class="home-nav11" ><a href='#nike'>Home</a></span>
                <span class="home-nav21">Shop</span>
                <span class="home-nav31">New Arrivals</span>
                <span class="home-nav41">Sale</span>
                <span class="home-nav51">Contact</span>
              </nav>
              <div class="home-buttons1">

                <button class="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" class="home-icon04">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
                </path>
              </svg><svg viewBox="0 0 877.7142857142857 1024" class="home-icon06">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
                </path>
              </svg><svg viewBox="0 0 602.2582857142856 1024" class="home-icon08">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
                </path>
              </svg>
            </div>
          </div>
          </header>
        </div>
        <div className="home-hero  mt-24">
          <div className="home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading text-8xl font-bold heading1">
                Shop the Latest Fashion Trends
              </h1>
              <span className="home-hero-sub-heading">
                Fashion Forward Clothing for Every Occasion
              </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">Get Started</button>
                <button className="home-hero-button2 button">
                  Learn More&nbsp;→
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="home-details px-8">
        <div class="home-details1">
          <div class="home-container02">
            <span classname="home-text mb-5 sectionTitle">
              <span>Details</span>
              <br />
            </span>
            <h2 class="home-details-heading text-4xl heading2">
              About Our Clothing Website
            </h2>
            <span class="home-details-sub-heading">
              We are a leading online clothing store offering the latest
              fashion trends for men, women, and children. With a wide
              selection of clothing items, accessories, and footwear, we have
              everything you need to stay stylish and on-trend. Our mission is
              to provide high-quality products at affordable prices, ensuring
              that everyone can express their unique style. Shop with us today
              and elevate your wardrobe!
            </span>
          </div>
          <img alt="image"
            src="https://images.unsplash.com/photo-1559127452-829071a09516?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDEyN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            class="home-details-image" />
        </div>
      </div>

    <div className="px-2 py-2 md:px-6 md:py-10">
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
        OUT Web Makes Your Work Easier
      </h1>
      <p className="my-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
      </p>
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <Copy size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">Copy & paste components</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
              dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
            <a
              href="#"
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              <span className="mx-1">read more</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white" id = "nike">Nike Airmax v2</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
      <div class="home-pricing">
        <div class="home-pricing1">
          <div class="home-container05">
            <span class="home-text06 sectionTitle">
              <span>Pricing</span>
              <br />
            </span>
            <h2 class="home-pricing-heading heading2">
              Some title for a pricing section
            </h2>
            <span class="home-pricing-sub-heading">
              Some catchy text for a pricing section
            </span>
          </div>
          <div class="home-container06">
            <div class="home-pricing-card">
              <div class="home-container07">
                <span class="home-text09 heading3">Free</span>
                <span class="home-free-plan-description">
                  A short description for the free plan
                </span>
              </div>
              <div class="home-container08">
                <span class="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span class="home-free-plan-price">0</span>
              </div>
              <div class="home-container09">
                <div class="home-container10">
                  <span class="home-text13">✔</span>
                  <span class="home-free-plan-features">
                    A feature of the free plan
                  </span>
                </div>
                <div class="home-container11">
                  <span class="home-text14">✔</span>
                  <span class="home-free-plan-features1">
                    A feature of the free plan
                  </span>
                </div>
                <div class="home-container12">
                  <span class="home-text15">✔</span>
                  <span class="home-free-plan-features2">
                    A feature of the free plan
                  </span>
                </div>
                <div class="home-container13">
                  <span class="home-text16">✔</span>
                  <span class="home-free-plan-features3">
                    A feature of the free plan
                  </span>
                </div>
              </div>
              <button class="home-button button">Continue with Free</button>
            </div>
            <div class="home-pricing-card1">
              <div class="home-container14">
                <span class="home-text17 heading3">BASIC</span>
                <span class="home-basic-plan-description">
                  A short description for the basic plan
                </span>
              </div>
              <div class="home-container15">
                <span class="home-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span class="home-basic-plan-pricing">7</span>
                <span class="home-text21">/ month</span>
              </div>
              <div class="home-container16">
                <div class="home-container17">
                  <span class="home-text22">✔</span>
                  <span class="home-text23">All features of FREE plan</span>
                </div>
                <div class="home-container18">
                  <span class="home-text24">✔</span>
                  <span class="home-basic-plan-features">
                    A feature of the basic plan
                  </span>
                </div>
                <div class="home-container19">
                  <span class="home-text25">✔</span>
                  <span class="home-basic-plan-features1">
                    A feature of the basic plan
                  </span>
                </div>
                <div class="home-container20">
                  <span class="home-text26">✔</span>
                  <span class="home-basic-plan-features2">
                    A feature of the basic plan
                  </span>
                </div>
                <div class="home-container21">
                  <span class="home-text27">✔</span>
                  <span class="home-basic-plan-features3">
                    A feature of the basic plan
                  </span>
                </div>
              </div>
              <button class="home-button1 button">Try the Basic plan</button>
            </div>
            <div class="home-pricing-card2">
              <div class="home-container22">
                <span class="home-text28 heading3">
                  <span>PRO</span>
                  <br />
                </span>
                <span class="home-pro-plan-description">
                  A short description for the pro plan
                </span>
              </div>
              <div class="home-container23">
                <span class="home-text31">
                  <span>$</span>
                  <span></span>
                </span>
                <span class="home-pro-plan-pricing">20</span>
                <span class="home-text34">/ month</span>
              </div>
              <div class="home-container24">
                <div class="home-container25">
                  <span class="home-text35">✔</span>
                  <span class="home-text36">
                    &nbsp;All features of BASIC plan
                  </span>
                </div>
                <div class="home-container26">
                  <span class="home-text37">✔</span>
                  <span class="home-pro-plan-features">
                    A feature of the pro plan
                  </span>
                </div>
                <div class="home-container27">
                  <span class="home-text38">✔</span>
                  <span class="home-pro-plan-features1">
                    A feature of the pro plan
                  </span>
                </div>
                <div class="home-container28">
                  <span class="home-text39">✔</span>
                  <span class="home-pro-plan-features2">
                    A feature of the pro plan
                  </span>
                </div>
              </div>
              <button class="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div class="home-gallery">
        <div class="home-gallery1">
          <h1 class="home-gallery-heading heading2">
            Explore Our Collection
          </h1>
          <span class="home-gallery-sub-heading">
            Discover the latest trends and styles
          </span>
          <div className="home-container29 flex flex-wrap gap-4">
            <div className=" gap-4 gallery-card3-gallery-card gallery-card3-root-class-name">
              <img alt="image"
                src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name1">
              <img alt="image"
                src="https://images.unsplash.com/photo-1597802540570-8de28950ae33?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name3">
              <img alt="image"
                src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name2">
              <img alt="image"
                src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name4">
              <img alt="image"
                src="https://images.unsplash.com/photo-1576558345433-58e777a5e423?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name5">
              <img alt="image"
                src="https://images.unsplash.com/photo-1586079615844-c0abfb04dc79?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name6">
              <img alt="image"
                src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name7">
              <img alt="image"
                src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name8">
              <img alt="image"
                src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name9">
              <img alt="image"
                src="https://images.unsplash.com/photo-1564859228273-274232fdb516?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name10">
              <img alt="image"
                src="https://images.unsplash.com/photo-1564477415696-57fe0623c698?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
            <div class="gallery-card3-gallery-card gallery-card3-root-class-name11">
              <img alt="image"
                src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDExMDExM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                class="gallery-card3-image" />
            </div>
          </div>
        </div>
      </div>
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  />
                </svg>
                
              </div>
              <div>
                <p className="mb-4  text-base font-medium">The Tailwind CSS Component library</p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by apurv
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
    </div>
  );
};

export default Home;
