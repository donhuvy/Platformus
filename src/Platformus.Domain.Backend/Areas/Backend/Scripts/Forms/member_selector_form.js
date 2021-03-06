﻿// Copyright © 2017 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

(function (platformus) {
  platformus.forms = platformus.forms || {};
  platformus.forms.memberSelectorForm = {};
  platformus.forms.memberSelectorForm.show = function (memberId, callback) {
    return platformus.forms.baseItemSelectorForm.show(
      "/backend/domain/memberselectorform?memberid=" + memberId, null, 1, callback
    );
  };

  platformus.forms.memberSelectorForm.select = function () {
    return platformus.forms.baseItemSelectorForm.select();
  };

  platformus.forms.memberSelectorForm.hideAndRemove = function () {
    return platformus.forms.baseItemSelectorForm.hideAndRemove();
  };
})(window.platformus = window.platformus || {});