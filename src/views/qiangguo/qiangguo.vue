<template>
  <div class="outdiv">
    <img src="./header.jpg" class="logoimg">
    <el-input
      ref="input"
      v-model="input"
      placeholder="输入题目中连续的文字"
      @keyup.enter.native="search"
      @focus="onFocus"
      clearable="true"
    >
      <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
    </el-input>

    <el-alert v-if="msg" :title="msg" type="success" :closable="false"></el-alert>
    <el-alert v-else :title="'共收录题目'+ (timus.length)" type="success" :closable="false"></el-alert>

    <el-card v-for="(item,index) in filterTimus" :key="item.text">
      <p>{{index+1}}. {{item.text}}</p>
      <p>答案: {{item.answer}}</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import timus from "./tiku.json"
@Component
export default class qiangguo extends Vue {
  public input = "";
  public timus: any[] = timus;
  public filterTimus: any[] = [];
  public msg = "";
  created() {
    document.title = "学习强国-挑战答题-答案搜索";
    this.loadTimu();
  }

  public test() {}
  public search() {
    let input = this.input;
    if (!this.input) {
      this.info("请输入关键词");
      return;
    }
    if (this.input.length < 1) {
      this.info("至少输入1个字");
      return;
    }
    this.filterTimus = this.timus.filter(n => {
      return n.text.indexOf(input) >= 0;
    });
    this.msg = `共找到${this.filterTimus.length}条记录`;
  }

  public onFocus() {
    (this.$refs.input as any).select();
  }

  public info(msg: string) {
    (this as any).$message.info(msg);
  }
  loadTimu() {
    console.info("timus",this.timus);
  }
}
</script>

<style  scoped>
.outdiv {
  max-width: 600px;
  margin: 0 auto;
}
.logoimg {
  width: 100%;
  height: 100px;
}
.header {
  width: 100%;
  height: 100px;
  background: #ce0000;
}
</style>
