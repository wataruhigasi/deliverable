<template>
    <div>
        <h1>Match Result Input</h1>
        <div>
        <ul>
            <li><input v-model="name"></li>
            <li><button v-on:click="addwinorlose">Add</button></li>
        </ul>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore';

    export default {
    name: 'winorloseAdd',
    data: function () {
        return {
        db: null,
        name: ''
        }
    },
    created: function() {
        this.db = firebase.firestore()
    },
    methods: {
        addwinorlose: function () {
        var _this = this

        // todos コレクションにドキュメントを追加
        this.db.collection('winorloses').add({
            name: _this.name
        })
        .then(function () {
            // 追加に成功したら、name を空にする
            _this.name = ''
        })
        .catch(function () {
            // エラー時の処理
        })
        }
    }
    }
</script>

