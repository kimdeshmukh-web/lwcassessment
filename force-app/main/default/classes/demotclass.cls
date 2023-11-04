public with sharing class demotclass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, Email, Phone FROM Contact order by CreatedDate desc LIMIT 10 ]; 
      }
   
}