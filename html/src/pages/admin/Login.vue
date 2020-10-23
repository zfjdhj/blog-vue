<template>
  <div class="custom-container-small custom-padded-tb-massive" style="max-width: 30em !important">
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div class="content">
              后台管理登录
            </div>
          </h2>
          <form class="ui large form" method="post" action="#" th:action="@{/admin/login}">
            <div class="ui segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="username" placeholder="用户名">
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password">
                </div>
              </div>
              <button class="ui fluid large teal submit button">登  录</button>
            </div>
            <div class="ui error mini message"></div>
            <div class="ui negative mini message" th:unless="${#strings.isEmpty(message)}" th:text="${message}">用户名，密码错误</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../static/css/custom.css"

export default {
name: "Login"
}
</script>

<style scoped>

</style>