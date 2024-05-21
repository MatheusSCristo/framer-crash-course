import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();


  const background = useTransform(scrollYProgress,[0,1],["rgb(86,1,245)","rgb(1,245,13)"]);

  return (
    <div>
      <motion.div
        style={{
          scaleX:scrollYProgress,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet. Qui maiores dolore sit nesciunt deleniti
          cum deleniti eius. Nam sint cupiditate 33 excepturi eveniet ea quasi
          sint et internos quia quo exercitationem rerum! In modi pariatur ut
          impedit quia sed velit molestiae qui temporibus tenetur qui dolore
          debitis. Rem ratione corporis et soluta blanditiis in eveniet
          dignissimos in dolorem molestiae. 33 laborum laboriosam quo voluptas
          aliquam et maxime fuga aut doloremque assumenda ut alias sunt ut
          beatae ipsam. Non iure delectus et nemo maiores est deserunt pariatur
          est autem sint 33 explicabo dolore. Ad magnam necessitatibus sed
          reiciendis corrupti eos veniam dolor. Eum laboriosam similique ea
          corrupti perferendis est velit eius et aspernatur sint! Quo fugit
          voluptatibus vel magnam similique qui ratione minima. In rerum itaque
          ut ducimus internos qui repellat reiciendis qui quia eligendi. Non
          harum incidunt quo ipsa distinctio est distinctio porro.{" "}
        </p>
        <p>
          Non blanditiis praesentium a beatae odit et fugit asperiores qui
          voluptatum facilis. Sed rerum galisum cum expedita necessitatibus aut
          eligendi expedita a quia saepe qui voluptatem quaerat aut quae earum.
          Qui reiciendis deleniti eum exercitationem deserunt eos dignissimos
          numquam. Aut nisi eius sed voluptas consequatur qui debitis nisi sed
          accusantium alias aut inventore maxime! 33 architecto illo aut error
          nesciunt aut animi unde. Aut quia enim 33 quidem sint ea enim quae quo
          harum vitae. Et Quis aspernatur in autem aliquid aut illo ipsam sit
          laborum totam aut asperiores unde non aliquam reprehenderit. Eos
          architecto esse vel molestiae adipisci et temporibus sint eos fugit
          omnis eos placeat officia et eius suscipit ea cupiditate error? Ab
          odit maiores qui Quis perspiciatis vel dolores cupiditate. Ut itaque
          omnis ea alias ipsum ab facere numquam sed soluta porro et voluptates
          deserunt est sunt perspiciatis aut voluptatem doloremque. Qui enim
          asperiores et atque nobis in aspernatur inventore est totam labore.{" "}
        </p>
        <p>
          Et vitae consequatur aut natus reprehenderit aut explicabo internos
          qui sequi inventore est vitae nihil quo quam culpa eum aliquid
          voluptatibus. Aut magnam similique ad quae officiis sit vero dicta ad
          nisi iure. Qui explicabo recusandae aut deserunt eaque sit perferendis
          quas vel rerum nihil sed optio incidunt. Et autem error quo animi quia
          est dolore fugit. Et consequatur illo et consectetur perferendis vel
          saepe minus et perferendis quisquam. Est quas sint ut rerum fugit ab
          animi harum quo reprehenderit quos. Aut ipsum reprehenderit non quia
          recusandae in explicabo animi ad placeat mollitia et ipsam neque. Sed
          sunt eius ea ipsum voluptatum sit quisquam doloremque et voluptate
          sequi.{" "}
        </p>
        <p>
          Qui cumque nemo sed perferendis commodi sed labore veniam aut cumque
          aspernatur ut minima quos. Et quos obcaecati est veniam illo ea nisi
          mollitia ab corporis labore ex eligendi sunt. Et vero voluptatem ut
          dolorem animi est excepturi tempore eos numquam deleniti qui soluta
          error. Ut ullam cumque qui veritatis consequuntur qui nihil
          consectetur est perspiciatis galisum At quia possimus ab iusto
          consequatur est facere reprehenderit. Quo soluta commodi qui sapiente
          alias qui dolores odio et dicta asperiores est sapiente voluptates et
          facilis consequatur. Sit voluptatem dolore eum dolores sunt ut
          reprehenderit nobis. Sit molestiae quasi eos galisum itaque et sint
          laudantium. Qui similique deleniti non veritatis labore et aliquam
          asperiores sed labore porro et dolorem provident. Qui quisquam ipsam
          ut voluptates doloribus est sapiente repudiandae nam unde maxime non
          labore natus. Aut sequi temporibus in autem asperiores et saepe
          assumenda ut enim exercitationem in explicabo eligendi. Sed omnis
          alias nam assumenda voluptas 33 officiis consequatur vel eligendi
          doloremque est nisi beatae hic accusamus quam quo dignissimos illo.
          Eos iure asperiores ut harum ducimus rem nisi aspernatur in
          repellendus repellat non atque illum. Eos suscipit velit ex quae
          voluptatibus ea voluptatem fuga a nisi omnis qui delectus molestiae
          eum nobis dolorem. Cum nihil voluptas in internos obcaecati hic dolor
          culpa?{" "}
        </p>
        <p>
          Et placeat voluptatibus est praesentium cupiditate qui quam vero sed
          ipsa internos id deleniti cupiditate eum reiciendis quibusdam ex alias
          quam. Aut dolor molestiae ad consequatur explicabo aut quia nihil et
          ullam laudantium. In veritatis voluptas rem ratione aliquam non
          voluptatem consectetur sit earum quam quo esse laudantium id soluta
          iste. Sit quia quia ad voluptatum maiores a consequatur illo! Est
          blanditiis molestiae eos galisum quam ut accusamus repellendus. Aut
          praesentium expedita aut beatae quia sit eveniet porro. Vel vitae nisi
          et quia tenetur vel quam fugiat 33 repudiandae ipsa et ipsum
          reiciendis. At doloribus nemo rem accusantium adipisci ut pariatur
          commodi a minima autem et eius quae At modi voluptates. Aut voluptates
          velit et voluptate facere est voluptas tempora et dolorem accusantium
          rem quia aliquam et tempora quibusdam et explicabo voluptates? Et
          magni tempore rem sapiente provident eum libero aperiam in optio
          voluptatem rem laboriosam nesciunt. Est dolorem aperiam ut nisi quia
          aut voluptatibus libero.{" "}
        </p>
        <p>
          Nam harum aperiam in beatae dolor et itaque dolorum. Est delectus
          dolorum aut quis incidunt cum laboriosam ullam est molestiae tempore.
          Ut dolore magni aut reprehenderit laudantium aut neque amet 33 velit
          maiores 33 omnis exercitationem et incidunt iusto 33 exercitationem
          dolores. Eos molestiae eaque est dolorem saepe est officia saepe. Non
          fugiat praesentium aut molestiae omnis hic voluptatem dolor sit vero
          rerum. Sed numquam nulla et placeat accusantium in voluptas vitae et
          nisi sapiente. Qui repudiandae animi vel esse repellendus ab laborum
          doloremque! Ut blanditiis harum ut amet eaque non quas facilis in
          autem necessitatibus. Eos sunt quidem ut perferendis rerum et odio
          magnam et corrupti reprehenderit vel incidunt quas aut quia
          voluptatem. Et exercitationem voluptas sed assumenda voluptatem aut
          Quis atque id ipsa architecto eum labore voluptatem et officiis veniam
          et totam dolorem? Qui alias impedit est libero laborum ut nihil
          incidunt ea esse galisum et dolorum sunt.{" "}
        </p>
        <p>
          Aut illum facere sit incidunt harum 33 nihil atque ut assumenda
          dignissimos ad ipsa maxime non adipisci ratione et temporibus
          voluptatem. Hic voluptas iusto et fugit fugit ut Quis voluptatem sed
          pariatur laboriosam. Est quasi sint et voluptatum accusantium eum
          culpa consequatur! A beatae quia qui tenetur illum et deserunt
          voluptas. Est placeat cupiditate hic velit magnam sed quas expedita ea
          libero labore sed internos galisum! Qui cumque perspiciatis ut
          delectus quisquam est tempore impedit. Eum suscipit sint et voluptatem
          reiciendis qui accusamus alias sed dignissimos maxime? Quo odio iure
          et perferendis dicta est eveniet error est quod consectetur.{" "}
        </p>
        <p>
          Quo tenetur omnis nam optio tempora non fuga exercitationem et dolorem
          velit sit sint quae id perspiciatis corrupti. Eum aliquam galisum et
          quod aliquam qui harum repudiandae id galisum reiciendis? Rem harum
          alias qui minima nesciunt eum dolorum ipsa ad blanditiis veritatis et
          inventore impedit. Non tempore optio ut eius ipsa in perferendis
          internos vel sunt dolorem. Eos consequuntur deserunt sit minus
          deserunt a aliquam aliquam non atque pariatur id quam mollitia. At
          natus autem aut voluptatum quia eos voluptatem laboriosam. Ea
          quibusdam aperiam id adipisci nihil At voluptatem veritatis ab
          accusantium quod et aspernatur culpa! Ut quaerat Quis qui quidem omnis
          eum illo deserunt?{" "}
        </p>
        <p>
          Eum inventore molestiae et dolor ducimus a unde quia et obcaecati
          aperiam. Eos quis aspernatur eos illo dicta quo nulla similique. Quo
          quibusdam iste sed error omnis id quis doloribus ad porro excepturi
          sit optio quia. Vel ratione galisum ut consequatur dolores et labore
          blanditiis ut eaque mollitia quo pariatur officiis qui neque quisquam.
          Ut nostrum quas rem laudantium provident sit dolorum placeat et velit
          eligendi. Nam incidunt repellendus ut explicabo repellat eos quia
          consequatur. Eos fugiat laboriosam eos eligendi itaque ex mollitia
          iure vel aspernatur nihil ut vitae facere et molestias consequatur non
          natus ullam. Aut numquam alias aut totam voluptatem ea dolorem
          repudiandae qui debitis exercitationem et eaque dolor non molestiae
          nulla vel magni repellat.{" "}
        </p>
        <p>
          Ad aliquam omnis non omnis odio et reprehenderit voluptatum At quaerat
          quia ad quisquam fugit rem voluptas rerum est repudiandae
          necessitatibus. A quia quibusdam ea temporibus odit ut voluptas magni
          et consequuntur dolores nam dolor aliquid. Vel labore sapiente aut
          consequatur nemo et quae quod eos illo rerum et nostrum animi aut
          harum obcaecati? 33 quia voluptatem non cumque dolorum et molestias
          dolorem ut repellendus accusamus et ullam suscipit non ipsam
          voluptate. Aut voluptas commodi vel culpa expedita qui pariatur omnis
          nam internos dolorem ut eius optio vel eius consequatur non beatae
          nulla! Qui ratione consequuntur sit esse voluptatem sit reprehenderit
          autem aut tempore veniam. Aut laboriosam incidunt et voluptatibus
          dolor et sint accusamus in asperiores aliquid et ratione quos aut
          officia sint sed quidem recusandae. In delectus quam aut distinctio
          sequi qui mollitia facilis ab odio numquam hic nesciunt praesentium
          est officia modi rem temporibus sapiente. Et iusto architecto aut
          impedit voluptatem qui porro libero ab debitis quae. Sed earum beatae
          hic error rerum ut similique quam. Eos nihil possimus eum voluptatem
          ratione ut consectetur repudiandae aut rerum soluta qui ullam unde qui
          accusamus corporis. Et facilis consectetur non nemo earum est animi
          maiores est voluptatem soluta non molestiae commodi rem laboriosam
          fugiat? Qui cupiditate odio hic eveniet doloribus ut fugit nihil et
          quia quisquam! Eum aliquid reiciendis a obcaecati soluta in laudantium
          quia et internos repudiandae ut necessitatibus odio.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet. Qui maiores dolore sit nesciunt deleniti
          cum deleniti eius. Nam sint cupiditate 33 excepturi eveniet ea quasi
          sint et internos quia quo exercitationem rerum! In modi pariatur ut
          impedit quia sed velit molestiae qui temporibus tenetur qui dolore
          debitis. Rem ratione corporis et soluta blanditiis in eveniet
          dignissimos in dolorem molestiae. 33 laborum laboriosam quo voluptas
          aliquam et maxime fuga aut doloremque assumenda ut alias sunt ut
          beatae ipsam. Non iure delectus et nemo maiores est deserunt pariatur
          est autem sint 33 explicabo dolore. Ad magnam necessitatibus sed
          reiciendis corrupti eos veniam dolor. Eum laboriosam similique ea
          corrupti perferendis est velit eius et aspernatur sint! Quo fugit
          voluptatibus vel magnam similique qui ratione minima. In rerum itaque
          ut ducimus internos qui repellat reiciendis qui quia eligendi. Non
          harum incidunt quo ipsa distinctio est distinctio porro.{" "}
        </p>
        <p>
          Non blanditiis praesentium a beatae odit et fugit asperiores qui
          voluptatum facilis. Sed rerum galisum cum expedita necessitatibus aut
          eligendi expedita a quia saepe qui voluptatem quaerat aut quae earum.
          Qui reiciendis deleniti eum exercitationem deserunt eos dignissimos
          numquam. Aut nisi eius sed voluptas consequatur qui debitis nisi sed
          accusantium alias aut inventore maxime! 33 architecto illo aut error
          nesciunt aut animi unde. Aut quia enim 33 quidem sint ea enim quae quo
          harum vitae. Et Quis aspernatur in autem aliquid aut illo ipsam sit
          laborum totam aut asperiores unde non aliquam reprehenderit. Eos
          architecto esse vel molestiae adipisci et temporibus sint eos fugit
          omnis eos placeat officia et eius suscipit ea cupiditate error? Ab
          odit maiores qui Quis perspiciatis vel dolores cupiditate. Ut itaque
          omnis ea alias ipsum ab facere numquam sed soluta porro et voluptates
          deserunt est sunt perspiciatis aut voluptatem doloremque. Qui enim
          asperiores et atque nobis in aspernatur inventore est totam labore.{" "}
        </p>
        <p>
          Et vitae consequatur aut natus reprehenderit aut explicabo internos
          qui sequi inventore est vitae nihil quo quam culpa eum aliquid
          voluptatibus. Aut magnam similique ad quae officiis sit vero dicta ad
          nisi iure. Qui explicabo recusandae aut deserunt eaque sit perferendis
          quas vel rerum nihil sed optio incidunt. Et autem error quo animi quia
          est dolore fugit. Et consequatur illo et consectetur perferendis vel
          saepe minus et perferendis quisquam. Est quas sint ut rerum fugit ab
          animi harum quo reprehenderit quos. Aut ipsum reprehenderit non quia
          recusandae in explicabo animi ad placeat mollitia et ipsam neque. Sed
          sunt eius ea ipsum voluptatum sit quisquam doloremque et voluptate
          sequi.{" "}
        </p>
        <p>
          Qui cumque nemo sed perferendis commodi sed labore veniam aut cumque
          aspernatur ut minima quos. Et quos obcaecati est veniam illo ea nisi
          mollitia ab corporis labore ex eligendi sunt. Et vero voluptatem ut
          dolorem animi est excepturi tempore eos numquam deleniti qui soluta
          error. Ut ullam cumque qui veritatis consequuntur qui nihil
          consectetur est perspiciatis galisum At quia possimus ab iusto
          consequatur est facere reprehenderit. Quo soluta commodi qui sapiente
          alias qui dolores odio et dicta asperiores est sapiente voluptates et
          facilis consequatur. Sit voluptatem dolore eum dolores sunt ut
          reprehenderit nobis. Sit molestiae quasi eos galisum itaque et sint
          laudantium. Qui similique deleniti non veritatis labore et aliquam
          asperiores sed labore porro et dolorem provident. Qui quisquam ipsam
          ut voluptates doloribus est sapiente repudiandae nam unde maxime non
          labore natus. Aut sequi temporibus in autem asperiores et saepe
          assumenda ut enim exercitationem in explicabo eligendi. Sed omnis
          alias nam assumenda voluptas 33 officiis consequatur vel eligendi
          doloremque est nisi beatae hic accusamus quam quo dignissimos illo.
          Eos iure asperiores ut harum ducimus rem nisi aspernatur in
          repellendus repellat non atque illum. Eos suscipit velit ex quae
          voluptatibus ea voluptatem fuga a nisi omnis qui delectus molestiae
          eum nobis dolorem. Cum nihil voluptas in internos obcaecati hic dolor
          culpa?{" "}
        </p>
        <p>
          Et placeat voluptatibus est praesentium cupiditate qui quam vero sed
          ipsa internos id deleniti cupiditate eum reiciendis quibusdam ex alias
          quam. Aut dolor molestiae ad consequatur explicabo aut quia nihil et
          ullam laudantium. In veritatis voluptas rem ratione aliquam non
          voluptatem consectetur sit earum quam quo esse laudantium id soluta
          iste. Sit quia quia ad voluptatum maiores a consequatur illo! Est
          blanditiis molestiae eos galisum quam ut accusamus repellendus. Aut
          praesentium expedita aut beatae quia sit eveniet porro. Vel vitae nisi
          et quia tenetur vel quam fugiat 33 repudiandae ipsa et ipsum
          reiciendis. At doloribus nemo rem accusantium adipisci ut pariatur
          commodi a minima autem et eius quae At modi voluptates. Aut voluptates
          velit et voluptate facere est voluptas tempora et dolorem accusantium
          rem quia aliquam et tempora quibusdam et explicabo voluptates? Et
          magni tempore rem sapiente provident eum libero aperiam in optio
          voluptatem rem laboriosam nesciunt. Est dolorem aperiam ut nisi quia
          aut voluptatibus libero.{" "}
        </p>
        <p>
          Nam harum aperiam in beatae dolor et itaque dolorum. Est delectus
          dolorum aut quis incidunt cum laboriosam ullam est molestiae tempore.
          Ut dolore magni aut reprehenderit laudantium aut neque amet 33 velit
          maiores 33 omnis exercitationem et incidunt iusto 33 exercitationem
          dolores. Eos molestiae eaque est dolorem saepe est officia saepe. Non
          fugiat praesentium aut molestiae omnis hic voluptatem dolor sit vero
          rerum. Sed numquam nulla et placeat accusantium in voluptas vitae et
          nisi sapiente. Qui repudiandae animi vel esse repellendus ab laborum
          doloremque! Ut blanditiis harum ut amet eaque non quas facilis in
          autem necessitatibus. Eos sunt quidem ut perferendis rerum et odio
          magnam et corrupti reprehenderit vel incidunt quas aut quia
          voluptatem. Et exercitationem voluptas sed assumenda voluptatem aut
          Quis atque id ipsa architecto eum labore voluptatem et officiis veniam
          et totam dolorem? Qui alias impedit est libero laborum ut nihil
          incidunt ea esse galisum et dolorum sunt.{" "}
        </p>
        <p>
          Aut illum facere sit incidunt harum 33 nihil atque ut assumenda
          dignissimos ad ipsa maxime non adipisci ratione et temporibus
          voluptatem. Hic voluptas iusto et fugit fugit ut Quis voluptatem sed
          pariatur laboriosam. Est quasi sint et voluptatum accusantium eum
          culpa consequatur! A beatae quia qui tenetur illum et deserunt
          voluptas. Est placeat cupiditate hic velit magnam sed quas expedita ea
          libero labore sed internos galisum! Qui cumque perspiciatis ut
          delectus quisquam est tempore impedit. Eum suscipit sint et voluptatem
          reiciendis qui accusamus alias sed dignissimos maxime? Quo odio iure
          et perferendis dicta est eveniet error est quod consectetur.{" "}
        </p>
        <p>
          Quo tenetur omnis nam optio tempora non fuga exercitationem et dolorem
          velit sit sint quae id perspiciatis corrupti. Eum aliquam galisum et
          quod aliquam qui harum repudiandae id galisum reiciendis? Rem harum
          alias qui minima nesciunt eum dolorum ipsa ad blanditiis veritatis et
          inventore impedit. Non tempore optio ut eius ipsa in perferendis
          internos vel sunt dolorem. Eos consequuntur deserunt sit minus
          deserunt a aliquam aliquam non atque pariatur id quam mollitia. At
          natus autem aut voluptatum quia eos voluptatem laboriosam. Ea
          quibusdam aperiam id adipisci nihil At voluptatem veritatis ab
          accusantium quod et aspernatur culpa! Ut quaerat Quis qui quidem omnis
          eum illo deserunt?{" "}
        </p>
        <p>
          Eum inventore molestiae et dolor ducimus a unde quia et obcaecati
          aperiam. Eos quis aspernatur eos illo dicta quo nulla similique. Quo
          quibusdam iste sed error omnis id quis doloribus ad porro excepturi
          sit optio quia. Vel ratione galisum ut consequatur dolores et labore
          blanditiis ut eaque mollitia quo pariatur officiis qui neque quisquam.
          Ut nostrum quas rem laudantium provident sit dolorum placeat et velit
          eligendi. Nam incidunt repellendus ut explicabo repellat eos quia
          consequatur. Eos fugiat laboriosam eos eligendi itaque ex mollitia
          iure vel aspernatur nihil ut vitae facere et molestias consequatur non
          natus ullam. Aut numquam alias aut totam voluptatem ea dolorem
          repudiandae qui debitis exercitationem et eaque dolor non molestiae
          nulla vel magni repellat.{" "}
        </p>
        <p>
          Ad aliquam omnis non omnis odio et reprehenderit voluptatum At quaerat
          quia ad quisquam fugit rem voluptas rerum est repudiandae
          necessitatibus. A quia quibusdam ea temporibus odit ut voluptas magni
          et consequuntur dolores nam dolor aliquid. Vel labore sapiente aut
          consequatur nemo et quae quod eos illo rerum et nostrum animi aut
          harum obcaecati? 33 quia voluptatem non cumque dolorum et molestias
          dolorem ut repellendus accusamus et ullam suscipit non ipsam
          voluptate. Aut voluptas commodi vel culpa expedita qui pariatur omnis
          nam internos dolorem ut eius optio vel eius consequatur non beatae
          nulla! Qui ratione consequuntur sit esse voluptatem sit reprehenderit
          autem aut tempore veniam. Aut laboriosam incidunt et voluptatibus
          dolor et sint accusamus in asperiores aliquid et ratione quos aut
          officia sint sed quidem recusandae. In delectus quam aut distinctio
          sequi qui mollitia facilis ab odio numquam hic nesciunt praesentium
          est officia modi rem temporibus sapiente. Et iusto architecto aut
          impedit voluptatem qui porro libero ab debitis quae. Sed earum beatae
          hic error rerum ut similique quam. Eos nihil possimus eum voluptatem
          ratione ut consectetur repudiandae aut rerum soluta qui ullam unde qui
          accusamus corporis. Et facilis consectetur non nemo earum est animi
          maiores est voluptatem soluta non molestiae commodi rem laboriosam
          fugiat? Qui cupiditate odio hic eveniet doloribus ut fugit nihil et
          quia quisquam! Eum aliquid reiciendis a obcaecati soluta in laudantium
          quia et internos repudiandae ut necessitatibus odio.{" "}
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
