var AcceptShareDialog=function(a){DialogWithGroupInput.call(this,a,{dynamicHeight:!0,responsive:!1,title:Strings.translateString("Accept Share")})};AcceptShareDialog.prototype=Object.create(DialogWithGroupInput.prototype);AcceptShareDialog.prototype.constructor=AcceptShareDialog;AcceptShareDialog.prototype.open=function(a){a.sourceFunction=LPProxy.getPendingRecievedShare;DialogWithGroupInput.prototype.open.call(this,a)};AcceptShareDialog.prototype.buildActionButtons=function(){};
AcceptShareDialog.prototype.validate=function(a){var b=DialogWithGroupInput.prototype.validate.apply(this,arguments),c=this.getGroup(a);c&&c.getSharedGroup()&&(this.addError("group",Strings.translateString("An individual share cannot be saved to a Shared Folder or Personal Linked Account.")),b=!1);return b};AcceptShareDialog.prototype.handleSubmit=function(a,b){b.vaultItem.accept(a,this.getGroup(a))};