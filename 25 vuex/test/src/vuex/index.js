import Vuex from "vuex"//先在创建好的项目下安装vuex: cnpm install vuex  -->安装完成导入Vuex
import Vue from "vue"//导入Vue
Vue.use(Vuex);//使用Vuex组件

const store = new Vuex.Store({//每个应用仅仅包含一个store实例 
	state:{//state:单一状态树 this.$store.state.状态名字; ...mapState(["title"]);
		list:[]
	},
	mutations:{//mutations:更改 Vuex 的 store 中的状态的唯一方法是提交mutations
	          //必须是同步函数;-->this.$store.commit("type","payload");
		add:(state,payload)=>{
			state.list.push(payload);
		}	
	},
	getters:{//getters:可以从store中的state中派生出一些状态,可以认为是store的计算属性。
	         //this.$store.getters.计算属性名字; ...mapGetters(["getFilms"]);
		activelist:function(state){
			return state.list.filter(item=>item.isChecked===false)
		},
		computedlist:function(state){
			return state.list.filter(item=>item.isChecked===true)
		},
		activenumber:function(state){
			return state.list.filter(item=>item.isChecked===false).length
		}
	}
})

export default store;