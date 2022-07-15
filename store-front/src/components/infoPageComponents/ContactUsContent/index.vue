<template>
  <div class="container">
    <form action="#">
      <table>
        <tr>
          <td><label for="input-for-name"> Name</label></td>
          <td><input type="text" id="input-for-name" /></td>
        </tr>
        <tr>
          <td><label for="input-for-email"> Email</label></td>
          <td><input type="email" id="input-for-email" /></td>
        </tr>
        <tr>
          <td><label for="input-for-phone-number"> Telephone number</label></td>
          <td><input type="number" id="input-for-phone-number" /></td>
        </tr>
        <tr>
          <td>
            <label for="input-for-users-text">What’s on your mind?</label>
          </td>
          <td><input type="textarea" id="input-for-users-text" /></td>
        </tr>
        <tr>
          <td>
            <button type="submit" value="Submit"></button>
            <b />
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUsContent",
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px black solid;
  display: flex;
  flex-direction: column;
  margin: auto;

  #input-for-users-text {
    height: 60px;
  }

  input {
    border: 1px black solid;
    width: 300px;
  }
}

#text-area-input {
  height: 50px;
}
</style>
