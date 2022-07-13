<template>
  <div class="welcome-info-container">
    <div class="welcome-info-text">
      <p>
        ЛАСКАВО ПРОСИМО на наш сайт! Незалежно від того, чи шукаєте ви якісний
        бойовий одяг, надійне туристичне спорядження чи професійне спорядження
        для страйкболу за помірними цінами, наш Military Shop ідеально
        задовольнить ваші потреби.
      </p>

      <p>
        Асортимент нашої продукції включає в себе все, що ви можете собі уявити,
        коли справа доходить до зовнішнього та військового спорядження, від
        широкого асортименту армійського додаткового та камуфляжного одягу,
        аксесуарів та бойової форми до тактичного та повсякденного взуття,
        окулярів та рюкзаків, до професійного бойового спорядження та кемпінгу.
        обладнання.
      </p>

      <p>
        Ми пишаємося нашим постійно розширюваним асортиментом якісної продукції
        від понад 50 брендів, включаючи Helikon, 5.11, Pentagon, Condor Outdoor,
        Surplus і Maxpedition, і це лише деякі з них. Більше того, Military 1st
        Surplus Store завжди забезпечує найвищий рівень обслуговування клієнтів
        і найшвидшу доставку. Будь ласка, не соромтеся звертатися до нас із
        будь-якими запитаннями щодо наших продуктів.
      </p>
    </div>

    <div>
      <img
        :src="require('@/assets/images/other/MyCollages.jpg')"
        alt="no photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeInfo",
};
</script>

<style lang="scss" scoped>
.welcome-info-container {
  font-family: georgia;
  margin: 10px;
  padding: 30px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    width: 700px;
  }
  .welcome-info-text {
    margin: 0 10px;
    p {
      text-indent: 25px;
    }
  }
}
</style>
