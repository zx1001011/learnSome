import axios from 'axios'

export const fetchData = (fn) => {
    axios.get("https://a.jspang.com/jestTest.json").then(response => {
        fn(response.data)
    })
}

export const fetchTwoData = (fn) => {
    return axios.get("https://a.jspang.com/jestTest.json")
}