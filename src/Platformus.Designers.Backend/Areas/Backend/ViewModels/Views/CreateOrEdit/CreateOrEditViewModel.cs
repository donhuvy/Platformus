﻿// Copyright © 2017 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.ComponentModel.DataAnnotations;
using Platformus.Barebone.Backend.ViewModels;

namespace Platformus.Designers.Backend.ViewModels.Views
{
  public class CreateOrEditViewModel : ViewModelBase
  {
    public string Id { get; set; }
    public string Subdirectory { get; set; }

    [Display(Name = "Filename")]
    [Required]
    [StringLength(64)]
    public string Filename { get; set; }

    [Display(Name = "Content")]
    public string Content { get; set; }
  }
}