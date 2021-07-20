<template>
    <div>
        <h1>Match Result</h1>
        <table>
        <thead>
            <td>winorlose</td>
        </thead>
        <tr v-for="winorlose in this.winorloses" :key="winorlose.id">
            <td>
            {{ winorlose.name }}
            </td>
        </tr>
        </table>
    </div>
</template>

<script>
import firebase from 'firebase'

    export default {
    name: 'winorloseIndex',
    data: function () {
        return {
        db: null,
        winorloses: []
        }
    },
    created: function () {
        this.db = firebase.firestore()

        var _this = this
    　　// todos コレクションを監視する
        this.db.collection('winorloses').onSnapshot(function (querySnapshot) {
        _this.winorloses = []
        querySnapshot.forEach(function (doc) {
            var data = doc.data()
            data.id = doc.id
            _this.winorloses.push(data)
        })
        })
    }
    }
</script>