<template>
  <div>
      <h2>Download File in Vue Js using Axios</h2>
  </div>
</template>

 
   
<script>
    import axios from 'axios';
    
    export default {
      mounted() {
          this.downloadFile();
      },
      methods: {
          downloadFile() {
                // let apiURL = `http://localhost:3030/api/getdata/${this.$route.params.id}`;  
                let apiURL = `http://localhost:8080/demo.pdf`;                 
                axios.get(apiURL,Blob).then((res) => {
                    var FILE = window.URL.createObjectURL(new Blob([res.data]));
                     
                     var docUrl = document.createElement('x');
                     docUrl.href = FILE;
                     docUrl.setAttribute('download', 'file.pdf');
                     document.body.appendChild(docUrl);
                     docUrl.click();
                }).catch(error => {
                    console.log(error)
                });
          }
      }
    }
</script>